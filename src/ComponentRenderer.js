import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"



import MainHero from "components/hero/Main.js";
import DocumentariesHero from "components/hero/Documentaries.js";

import ExperiencesFeatures from "components/features/Experiences.js";

import ExperiencesShowroom from "components/cards/Experiences.js";
import MerchShowroom from "components/cards/Merch.js";

import Footer from "components/footers/Footer.js";


export const components = {
  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        MainHero: {
          name: "MainHero",
          component: MainHero,
          url: "/components/blocks/Hero/Main",
        },
        DocumentariesHero: {
          name: "DocumentariesHero",
          component: DocumentariesHero,
          url: "/components/blocks/Hero/Documentaries",
        }
      }
    },
    Features: {
      type: "Features Section",
      elements: {
        ExperiencesFeatures: {
          name: "ExperiencesFeatures",
          component: ExperiencesFeatures,
          url: "/components/blocks/Features/ExperiencesFeatures",
        }
      }
    },

    Cards: {
      type: "Cards",
      elements: {
        ExperiencesShowroom: {
          name: "ExperiencesShowroom",
          component: ExperiencesShowroom,
          url: "/components/blocks/Cards/ExperiencesShowroom",
        },
        MerchShowroom: {
          name: "MerchShowroom",
          component: MerchShowroom,
          url: "/components/blocks/Cards/MerchShowroom",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        Footer: {
          name: "Footer",
          component: Footer,
          url: "/components/blocks/Footer/Footer",
        }
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
