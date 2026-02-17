import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Box, Typography, Paper } from '@mui/material';

interface GalleryImage {
    id: string;
    url: string;
    name: string;
    width: number;
    height: number;
    size: number;
}

export const Gallery: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snap) => {
            setImages(snap.docs.map(d => ({ id: d.id, ...d.data() } as GalleryImage)));
        });
        return unsub;
    }, []);

    if (images.length === 0) return null;

    return (
        <Box className="mt-20 mb-24">
            <Typography variant="h3" align="center" gutterBottom className="font-serif italic font-light mb-12">
                Our Promise in Pictures
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {images.map((img) => (
                    <Paper key={img.id} elevation={0} className="overflow-hidden bg-transparent group">
                        <div className="overflow-hidden">
                            <img
                                src={img.url}
                                alt={img.name}
                                className="w-full h-auto aspect-square object-cover display-block transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <Box className="p-3 text-center">
                            <Typography variant="caption" className="text-zinc-500 uppercase tracking-widest text-[10px]">
                                {img.width} x {img.height} | {(img.size / 1024).toFixed(0)} KB
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </div>
        </Box>
    );
};
