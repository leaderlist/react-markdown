import React from 'react'
import { Layout } from 'antd'

import { EditorHeader, EditorMain ,EditorFooter } from '../../components'
import style from './Editor.module.less'
const { Header, Footer, Content } = Layout

export const Editor: React.FC = function () {
  return (
    <>
      <Layout>
        <Header className={style.header}>
          <EditorHeader />
        </Header>
        <Content>
          <EditorMain />
        </Content>
        <Footer>
          <EditorFooter />
        </Footer>
      </Layout>
    </>
  )
}
