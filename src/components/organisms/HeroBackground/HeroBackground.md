**Basic Example**

```jsx
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

import theme from '../../../theme';

<ThemeProvider theme={theme}>
  <HeroBackground>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3" style={{ color: 'white', fontWeight: 900 }}>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" style={{ color: 'white' }} gutterBottom>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained">Download exhibitor overview</Button>
      </Grid>
    </Grid>
  </HeroBackground>
</ThemeProvider>;
```

**Custom Background Color Example**

```jsx
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography, Button, colors } from '@material-ui/core';

import theme from '../../../theme';

<ThemeProvider theme={theme}>
  <HeroBackground backgroundColor={colors.blue[500]}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3" style={{ color: 'white', fontWeight: 900 }}>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" style={{ color: 'white' }} gutterBottom>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained">Download exhibitor overview</Button>
      </Grid>
    </Grid>
  </HeroBackground>
</ThemeProvider>;
```

**Custom Background Image Example**

```jsx
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography, Button, colors } from '@material-ui/core';

import theme from '../../../theme';

<ThemeProvider theme={theme}>
  <HeroBackground backgroundImg="/images/photos/expo-gallery/gallery3.jpg">
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3" style={{ color: 'white', fontWeight: 900 }}>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" style={{ color: 'white' }} gutterBottom>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          Edit this text
          src>components>organisms>herobackground>herobackground.md
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained">Download exhibitor overview</Button>
      </Grid>
    </Grid>
  </HeroBackground>
</ThemeProvider>;
```
