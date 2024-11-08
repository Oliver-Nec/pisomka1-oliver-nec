// components/DropdownMenu.tsx
"use client"; // Ensure this is a client-side component

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";

const DropdownMenu: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTo = (path: string) => {
    router.push(path);
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigateTo("/")}>Home Page</MenuItem>
        {session ? (
          <MenuItem
            onClick={() => {
              signOut();
              handleClose();
            }}
          >
            Logout
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              signIn("google");
              handleClose(); 
            }}
          >
            Login with Google
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default DropdownMenu;




