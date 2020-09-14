import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  typed: {
    fontWeight: 'bold',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <>
            <span>
              Continuous Improvement
              <br />
              <span className="text-highlighted__primary">
                The DataLoci Project
              </span>
              <br />
            </span>
            <TypedText
              component="span"
              variant="h2"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: [
                  'IT Operations Management',
                  'Enterprise Tools',
                  'Monitoring Strategy',
                  'IT Service Management',
                  'Configuration Management',
                  'Integrations',
                  'Analytics and Dashboards',
                ],
                typeSpeed: 100,
                loop: true,
              }}
            />
          </>
        }
        subtitle="Alignment of Enterprise Tools delivers a continuous improvement environment that enables strategic and tactical business agility."
        align="center"
        titleProps={{
          variant: 'h2',
          color: 'textPrimary',
        }}
        subtitleProps={{
          color: 'textPrimary',
          variant: 'h5',
        }}
        ctaGroup={[
          <Button
            size="large"
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="/signup-cover"
          >
            Sign Up
          </Button>,
          // <Button
          //   size="large"
          //   variant="outlined"
          //   color="primary"
          //   component="a"
          //   target="blank"
          //   href="/"
          // >
          //   Documentation
          // </Button>,
        ]}
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
