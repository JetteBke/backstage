/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Tooltip,
  ListItemText,
  makeStyles,
  IconButton,
  Typography,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import { User } from '../types';

const useStyles = makeStyles({
  listItemPrimary: {
    fontWeight: 'bold',
  },
});

type Props = {
  user: User;
};

export const EscalationUser = ({ user }: Props) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemIcon>
        <Avatar alt="User" />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography className={classes.listItemPrimary}>
            {user.firstName} {user.lastName}
          </Typography>
        }
        secondary={user.email}
      />
      <ListItemSecondaryAction>
        <Tooltip title="Send e-mail to user" placement="top">
          <IconButton href={`mailto:${user.email}`}>
            <EmailIcon color="primary" />
          </IconButton>
        </Tooltip>
        {/* {user._selfUrl && (
          <Tooltip title="View in SplunkOnCall" placement="top">
            <IconButton
              href={`https://api.victorops.com${user._selfUrl.replace('/api-public', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <OpenInBrowserIcon />
            </IconButton>
          </Tooltip>
        )} */}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
