import '@mantine/core/styles.css';

import {  ActionIcon, Flex, Group, MantineProvider, Text, Title, } from '@mantine/core';
import classes from './App.module.css';
import { IconBrandGithub, IconBrandLinkedin, IconBrandUpwork, IconFileCertificate } from '@tabler/icons-react';

function App() {
  return <MantineProvider defaultColorScheme="dark">
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Flex className={classes.bodyWrapper}>
          <img className={classes.profilePict} src='https://firebasestorage.googleapis.com/v0/b/blogs-4990b.appspot.com/o/avatar.jpeg?alt=media&token=95a3cf36-5f7d-4283-b8f6-bb16831227ad'/>
          <div>
            <Title className={classes.title}>Premaditya Mandala</Title>
            <Text fw={500} fz="lg" mb={5} className={classes.content}>
              Back-end Developer − Indonesia
            </Text>
            <Text fz="sm" mb={24} className={classes.content}>
              My name Premaditya Mandala, currently live in Denpasar, Bali. I'm
              a Backend Developer that has been experienced for 5 years using
              laravel and node.js especially with Nestjs and Adonis.JS. Now I'm still
              learning on python, golang and others.
            </Text>
            <Group className={classes.group}>
              <a href='https://github.com/AgungPremaditya/'>
                <ActionIcon className={classes.actionButton} size="xl">
                  <IconBrandGithub />
                </ActionIcon>
              </a>

              <a href='https://www.linkedin.com/in/agung-premaditya-520035165/'>
                <ActionIcon className={classes.actionButton} size="xl">
                  <IconBrandLinkedin />
                </ActionIcon>
              </a>
              
              <a href='https://www.upwork.com/freelancers/~01fbd990a969dc9e11/'>
                <ActionIcon className={classes.actionButton} size="xl">
                  <IconBrandUpwork />
                </ActionIcon>
              </a>

              <a href='https://firebasestorage.googleapis.com/v0/b/blogs-4990b.appspot.com/o/CV_2024.pdf?alt=media'>
                <ActionIcon className={classes.actionButton} size="xl">
                  <IconFileCertificate />
                </ActionIcon>
              </a>
            </Group>
          </div>
        </Flex>
      </div>
    </div>
  </MantineProvider>;
}

export default App
