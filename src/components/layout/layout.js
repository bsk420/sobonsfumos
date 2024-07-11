import { Flex, Link, Text } from "@theme-ui/components"
import Image from "next/image"
import React from "react"
import RegionSelector from "../region-selector/region-selector"

const Layout = ({ children, country, regions, handleRegionChange }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#F3F4F6",
      }}
    >
      <Flex
        sx={{
          justifyContent: ["center", "space-between"],
          alignItems: "center",
          flexDirection: ["column", "row"],
          minHeight: "100vh",
          py: "2em",
        }}
      >
        <Flex
          sx={{
            justifyContent: ["center", "flex-end"],
            alignItems: "center",
            width: ["100%", "50%"],
          }}
        >
          {children}
        </Flex>
        <Flex
          sx={{
            justifyContent: ["center", "flex-start"],
            paddingTop: "10px",
            paddingLeft: [0, "100px"],
            width: "50%",
            height: "100px",
            backgroundColor: "#F3F3F6",
          }}
        >
          <Flex
            sx={{
              paddingTop: "10px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {regions?.length && (
              <RegionSelector
                selected={country}
                regions={regions}
                handleRegionChange={handleRegionChange}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Layout
