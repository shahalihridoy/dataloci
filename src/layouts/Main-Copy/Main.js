import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    itom: {
      title: 'ITOM',
      id: 'itom',
      children: {
        enterprisetools: {
          groupTitle: 'Enterprise Tools',
          pages: [
            {
              title: 'Coworking',
              href: '/coworking',
            },
            {
              title: 'Rental',
              href: '/rental',
            },
            {
              title: 'Job Listing',
              href: '/job-listing',
            },
            {
              title: 'E-Learning',
              href: '/e-learning',
            },
            {
              title: 'E-commerce',
              href: '/e-commerce',
            },
            {
              title: 'Expo',
              href: '/expo',
            },
          ],
        },
      },
    },
    services: {
      title: 'Services',
      id: 'services',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Administration',
              href: '/career-listing',
            },
            {
              title: 'Engineering',
              href: '/career-listing-minimal',
            },
            {
              title: 'Architecture',
              href: '/career-opening',
            },
            {
              title: 'Integration',
              href: '/career-opening',
            },
            {
              title: 'Analytics & Dashboards',
              href: '/career-opening',
            },
          ],
        },
      },
    },
    solutions: {
      title: 'Solutions',
      id: 'solutions',
      children: {
        solutions: {
          groupTitle: 'Solutions',
          pages: [
            {
              title: 'Discovery',
              href: '/account/general',
            },
            {
              title: 'Inventory & Asset Management',
              href: '/account/security',
            },
            {
              title: 'Service Mapping',
              href: '/account/notifications',
            },
            {
              title: 'Performance & Availability',
              href: '/account/billing',
            },
            {
              title: 'Security & Compliance',
              href: '/account/billing',
            },
          ],
        },
      },
    },
    development: {
      title: 'Development',
      id: 'development',
      children: {
        development: {
          groupTitle: 'Development',
          pages: [
            {
              title: 'Software',
              href: '/account/general',
            },
            {
              title: 'Video',
              href: '/account/security',
            },
            {
              title: 'Web',
              href: '/account/notifications',
            },
            {
              title: 'The Future',
              href: '/account/billing',
            },
          ],
        },
      },
    },
    contentmedia: {
      title: 'Content & Media',
      id: 'contentmedia',
      children: {
        contentmedia: {
          groupTitle: 'Content & Media',
          pages: [
            {
              title: 'YouTube',
              href: '/account/general',
            },
            {
              title: 'Twitter',
              href: '/account/security',
            },
            {
              title: 'Instagram',
              href: '/account/notifications',
            },
            {
              title: 'Facebook',
              href: '/account/billing',
            },
            {
              title: 'LinkedIn',
              href: '/account/billing',
            },
            {
              title: 'About Me',
              href: '/account/billing',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>{children}</main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
