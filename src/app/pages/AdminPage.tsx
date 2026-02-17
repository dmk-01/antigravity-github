import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { auth, storage, db } from '../../firebaseConfig';
import { useSite } from '../context/SiteContext';
import {
    Box, Container, Typography, Tab, Tabs, TextField, Button,
    Grid, Paper, List, ListItem, IconButton,
    Divider, CircularProgress
} from '@mui/material';
import { Delete, Add, Upload, ExitToApp, ColorLens, TextFields, Image as ImageIcon, Link as LinkIcon } from '@mui/icons-material';

interface GalleryImage {
    id: string;
    url: string;
    name: string;
    size: number;
    width?: number;
    height?: number;
}

export const AdminPage = () => {
    const { siteData, updateSiteData } = useSite();
    const [user, setUser] = useState<any>(null);
    const [tab, setTab] = useState(0);
    const [loading, setLoading] = useState(true);
    const [gallery, setGallery] = useState<GalleryImage[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            if (u) {
                setUser(u);
            } else {
                navigate('/login');
            }
            setLoading(false);
        });
        return unsub;
    }, [navigate]);

    useEffect(() => {
        if (user) {
            const unsub = onSnapshot(collection(db, 'gallery'), (snap) => {
                setGallery(snap.docs.map(d => ({ id: d.id, ...d.data() } as GalleryImage)));
            });
            return unsub;
        }
    }, [user]);

    const handleLogout = () => signOut(auth);

    const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const sRef = ref(storage, `site/logo_${Date.now()}`);
        await uploadBytes(sRef, file);
        const url = await getDownloadURL(sRef);
        await updateSiteData({ logo: url });
    };

    const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const sRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
            await uploadBytes(sRef, file);
            const url = await getDownloadURL(sRef);

            // Get image dimensions
            const img = new Image();
            img.src = url;
            img.onload = async () => {
                await addDoc(collection(db, 'gallery'), {
                    url,
                    name: file.name,
                    size: file.size,
                    width: img.width,
                    height: img.height,
                    createdAt: new Date()
                });
            };
        }
    };

    const deleteGalleryItem = async (id: string) => {
        await deleteDoc(doc(db, 'gallery', id));
    };

    const updateNavItem = (index: number, field: string, value: string) => {
        const newNav = [...siteData.navigation];
        (newNav[index] as any)[field] = value;
        updateSiteData({ navigation: newNav });
    };

    const addNavItem = () => {
        updateSiteData({ navigation: [...siteData.navigation, { name: "New Link", path: "/" }] });
    };

    const removeNavItem = (index: number) => {
        const newNav = siteData.navigation.filter((_, i) => i !== index);
        updateSiteData({ navigation: newNav });
    };

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4">Admin Control Panel</Typography>
                    <Button startIcon={<ExitToApp />} onClick={handleLogout} color="inherit">Logout</Button>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={(_, v) => setTab(v)}>
                        <Tab icon={<ColorLens />} label="Appearance" />
                        <Tab icon={<LinkIcon />} label="Navigation" />
                        <Tab icon={<TextFields />} label="Content" />
                        <Tab icon={<ImageIcon />} label="Gallery" />
                    </Tabs>
                </Box>

                {/* Appearance Tab */}
                {tab === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Website Identity</Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Box>
                                <Typography variant="subtitle2">Current Logo</Typography>
                                <Box sx={{ p: 2, bgcolor: '#f5f5f5', textAlign: 'center', mb: 2 }}>
                                    <img src={siteData.logo} alt="Logo" style={{ maxHeight: 60 }} />
                                </Box>
                                <Button variant="outlined" component="label" fullWidth startIcon={<Upload />}>
                                    Upload New Logo
                                    <input type="file" hidden onChange={handleLogoUpload} accept="image/*" />
                                </Button>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" gutterBottom>Theme Settings</Typography>
                                <TextField
                                    label="Primary Branding Color"
                                    fullWidth
                                    value={siteData.theme.primaryColor}
                                    onChange={(e) => updateSiteData({ theme: { ...siteData.theme, primaryColor: e.target.value } })}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Typography Family"
                                    fullWidth
                                    value={siteData.theme.fontFamily}
                                    onChange={(e) => updateSiteData({ theme: { ...siteData.theme, fontFamily: e.target.value } })}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Main Font Size"
                                    fullWidth
                                    value={siteData.theme.fontSizeBase}
                                    onChange={(e) => updateSiteData({ theme: { ...siteData.theme, fontSizeBase: e.target.value } })}
                                />
                            </Box>
                        </div>
                    </Box>
                )}

                {/* Navigation Tab */}
                {tab === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Header Navigation Items</Typography>
                        <List>
                            {siteData.navigation.map((item, index) => (
                                <ListItem key={index} divider sx={{ py: 2 }}>
                                    <div className="grid grid-cols-12 gap-4 w-full items-center">
                                        <div className="col-span-5">
                                            <TextField size="small" fullWidth label="Label" value={item.name} onChange={(e) => updateNavItem(index, 'name', e.target.value)} />
                                        </div>
                                        <div className="col-span-5">
                                            <TextField size="small" fullWidth label="URL Path" value={item.path} onChange={(e) => updateNavItem(index, 'path', e.target.value)} />
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <IconButton onClick={() => removeNavItem(index)} color="error"><Delete /></IconButton>
                                        </div>
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                        <Button startIcon={<Add />} onClick={addNavItem} sx={{ mt: 2 }}>Add Nav Item</Button>
                    </Box>
                )}

                {/* Content Tab */}
                {tab === 2 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Page Text Contents</Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>Edit specific slogans and headings across the site. These keys must match the component's getContent code.</Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {['hero-title', 'hero-subtitle', 'hero-cta', 'vow-title', 'vow-content'].map((key) => (
                                <TextField
                                    key={key}
                                    label={key.toUpperCase()}
                                    fullWidth
                                    multiline
                                    rows={2}
                                    value={siteData.contents[key] || ''}
                                    onChange={(e) => updateSiteData({ contents: { ...siteData.contents, [key]: e.target.value } })}
                                />
                            ))}
                        </div>
                    </Box>
                )}

                {/* Gallery Tab */}
                {tab === 3 && (
                    <Box sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, alignItems: 'center' }}>
                            <Typography variant="h6">Image Gallery</Typography>
                            <Button variant="contained" component="label" startIcon={<Upload />} sx={{ bgcolor: '#000' }}>
                                Upload Images
                                <input type="file" multiple hidden onChange={handleGalleryUpload} accept="image/*" />
                            </Button>
                        </Box>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {gallery.map((img) => (
                                <Paper key={img.id} sx={{ p: 1, position: 'relative', overflow: 'hidden' }}>
                                    <img src={img.url} alt={img.name} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
                                    <Typography variant="caption" display="block" noWrap sx={{ mt: 1, fontWeight: 'bold' }}>{img.name}</Typography>
                                    <Typography variant="caption" color="textSecondary" display="block">
                                        {img.width}x{img.height} | {(img.size / 1024).toFixed(1)} KB
                                    </Typography>
                                    <IconButton
                                        size="small"
                                        onClick={() => deleteGalleryItem(img.id)}
                                        sx={{
                                            position: 'absolute',
                                            top: 5,
                                            right: 5,
                                            bgcolor: 'rgba(255,255,255,0.8)',
                                            '&:hover': { bgcolor: 'rgba(255,255,255,1)' }
                                        }}
                                    >
                                        <Delete fontSize="small" color="error" />
                                    </IconButton>
                                </Paper>
                            ))}
                        </div>
                    </Box>
                )}
            </Paper>
        </Container>
    );
};
