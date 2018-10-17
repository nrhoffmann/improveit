import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import { withRouter } from 'next/router';

export default withRouter((props: any) => (
  <Layout title='About | Next.js + TypeScript Example'>
    <p>{props.router.query.slug}</p>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Layout>
));
