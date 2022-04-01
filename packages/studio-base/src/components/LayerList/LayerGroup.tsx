// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Collapse, List, styled as muiStyled } from "@mui/material";
import { useState } from "react";

import Stack from "@foxglove/studio-base/components/Stack";

import { Layer, LayerProps } from "./Layer";

export type Item = {
  key: string;
  onClick?: LayerProps["onClick"];
  primary?: LayerProps["primary"];
  items?: Item[];
  secondaryAction?: LayerProps["secondaryAction"];
  properties?: LayerProps["properties"];
};

export type LayerGroupProps = {
  defaultOpen?: boolean;
  divider?: LayerProps["divider"];
  icon?: JSX.Element;
  openIcon?: JSX.Element;
  primary?: LayerProps["primary"];
  secondaryAction?: LayerProps["secondaryAction"];
  items?: Item[];
  properties?: LayerProps["properties"];
};

const StyledLayer = muiStyled(Layer)(({ theme }) => ({
  ".MuiListItemIcon-root": {
    minWidth: theme.spacing(3.5),
    opacity: 0.3,
  },
  ".MuiListItemButton-root": {
    paddingLeft: theme.spacing(6),
  },
  "&:hover": {
    outline: `1px solid ${theme.palette.primary.main}`,
    outlineOffset: -1,

    ".MuiListItemIcon-root": {
      opacity: 0.8,
    },
  },
}));

export function LayerSubGroup(props: Omit<LayerGroupProps, "icon" | "openIcon">): JSX.Element {
  const { defaultOpen = false, primary, secondaryAction, properties, items = [] } = props;
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const textProps = { primary };

  return (
    <>
      <Layer
        onClick={() => setOpen(!open)}
        icon={open ? <ArrowDownIcon /> : <ArrowRightIcon />}
        secondaryAction={secondaryAction}
        properties={properties}
        {...textProps}
      />
      {items.length > 0 && (
        <Collapse in={open} timeout="auto">
          <List dense disablePadding>
            {items.map(({ ...item }) => (
              <StyledLayer
                disableIcon
                key={item.key}
                onClick={item.onClick}
                primary={item.primary}
                secondaryAction={item.secondaryAction}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

export function LayerGroup(props: LayerGroupProps): JSX.Element {
  const {
    defaultOpen = false,
    icon = <FolderIcon />,
    openIcon = <FolderOpenIcon />,
    secondaryAction,
    primary,
    properties,
    items = [],
  } = props;
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const textProps = { primary };
  return (
    <>
      <Layer
        onClick={() => setOpen(!open)}
        secondaryAction={secondaryAction}
        properties={properties}
        icon={
          <Stack direction="row" style={{ marginLeft: "-20px" }}>
            {open ? <ArrowDownIcon /> : <ArrowRightIcon />}
            {open ? openIcon : icon}
          </Stack>
        }
        {...textProps}
      />
      {items.length > 0 && (
        <Collapse in={open} timeout="auto">
          <List dense disablePadding>
            {items.map(({ ...item }) => (
              <>
                {item.items ? (
                  <LayerSubGroup
                    key={item.key}
                    primary={item.primary}
                    items={item.items}
                    secondaryAction={item.secondaryAction}
                  />
                ) : (
                  <Layer
                    disableIcon
                    onClick={item.onClick}
                    key={item.key}
                    primary={item.primary}
                    secondaryAction={item.secondaryAction}
                  />
                )}
              </>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}