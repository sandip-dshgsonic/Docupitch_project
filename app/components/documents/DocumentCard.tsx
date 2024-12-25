'use client';

import { Card, CardContent, CardActions, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert, Edit, Delete, Share } from '@mui/icons-material';
import { useState } from 'react';
import { Document } from '@/app/types/document';
import { useDocumentActions } from '@/app/hooks/useDocumentActions';

interface DocumentCardProps {
  document: Document;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { handleEdit, handleDelete, handleShare } = useDocumentActions();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" noWrap>{document.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Last modified: {new Date(document.updatedAt).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleEdit(document.id)}>
            <Edit sx={{ mr: 1 }} /> Edit
          </MenuItem>
          <MenuItem onClick={() => handleShare(document.id)}>
            <Share sx={{ mr: 1 }} /> Share
          </MenuItem>
          <MenuItem onClick={() => handleDelete(document.id)}>
            <Delete sx={{ mr: 1 }} /> Delete
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
}