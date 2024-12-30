import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import './header.module.css';

export default function Header() {
return (
    <header>
        <AppBar position="sticky" color="default">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
            </IconButton>
            <Typography variant="h6">
            My App
            </Typography>
        </Toolbar>
        </AppBar>
    </header>
)
}