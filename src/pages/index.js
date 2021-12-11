import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Gm" />
    <h2>Gm Pogchamp</h2>
    <div className="flex flex-row justify-center space-x-4 ">
    <StaticImage
      src="../images/nft.png"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="NFT"
      style={{ marginBottom: `1.45rem` }}
      className="w-1/2 md:w-1/3"
    />
    <div>
    <h3 className="text-purple-600 text-left tracking-wide text-xl lg:text-4xl leading-normal p-1">Hanging out with Friends,<br /> Community on <br /> <span className="text-discordpurple">Discord</span> . Why Not Trade <br/> <span>NFTs</span> on <span className="text-discordpurple">Discord</span>? </h3>
    </div>
    </div>
    
    
  
  </Layout>
)

export default IndexPage
