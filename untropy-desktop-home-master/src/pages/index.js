import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import styled from '@emotion/styled'
import map from "../images/map.jpg"



const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${map});
    width: 100%;
    position: fixed;
    background-position: center;
    height: 100%;
    font-family: Roboto !important;
`

const GenCopy = styled.p`
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.2em;
`

const IndexPage = () => (
  <Content>
    <SEO title="Home" />
    <div css={css`
        z-index: 2;
        position: absolute;
        top: 0;
        background-color: rgba(0,0,0, 0.5);
        color: #fff;
        width: 100%;
        height: 100%;
        padding: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media only screen and (min-width: 768px) {
          flex-direction: row;
        }
    `}>
      <div
        css={css`

          width: 100%;
          @media only screen and (min-width: 768px) {
            width: 40%;
          }
      `}>
        <p css={css`
            font-size: 3em;
            font-weight: 700;
            line-height: 1.2em;
        `}>
        Share your travel stories with the world</p>

        <GenCopy>
          Create a travel map of your favourite attractions, restaurants at destination and share your experiences.
        </GenCopy>
        <br /><br />

        <p css={css`
            font-size: 2em;
            font-weight: 600;
            line-height: 1em;
        `}>
          Coming Soon
        </p>




        <GenCopy>
          We will soon be launching our mobile app. Sign up and be the first to use it when we go live
        </GenCopy>
      </div>

      <div css={css`
          width: 100%;
          height: auto;
          border-radius: 5px;
          background-color: #fff;
          color: #000;
          display: flex;
          flex-direction: column;
          padding: 20px;width: 100%;
          @media only screen and (min-width: 768px) {
            width: 40%;
          }
      `}>
        <h3>Sign Up</h3>
      </div>
    </div>
  </Content>
)

export default IndexPage
