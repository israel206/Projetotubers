import React from 'react';
import { Box, Grid } from '@material-ui/core';

// fazendo a importação do components
import Layout from '../components/Layout';
import VideoCard from 'src/components/VideoCard';

export default function Home({ data }) {

  return (
    // substituir div por Layout
    <Layout title="Tubers">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  // colocando imagem statics
  // das imgens/videos
  const data = [
    {
      id: 1,
      title: 'NEXT.JS; O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE 1]',
      authorId: 1,
      authorName: 'Israel Silva',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'NEXT.JS; O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE 2]',
      authorId: 1,
      authorName: 'Israel Silva',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next02.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'NEXT.JS; O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE 3]',
      authorId: 1,
      authorName: 'Israel Silva',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'NEXT.JS; O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE 3]',
      authorId: 1,
      authorName: 'Israel Silva',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data:JSON.parse(JSON.stringify(data)),
    },
  }
}

