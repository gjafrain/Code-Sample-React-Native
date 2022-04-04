/** @format */

import React, { useState, useEffect } from "react"
import { View, ScrollView, RefreshControl } from "react-native"
// STYLE
import Styles from "./Style"
// CHILD
import { HCart } from "../../atoms/HCart"
import { NoDataFound } from "../NoDataFound"

export default function VPList({
  products = [],
  container = {},
  startingSpace = false,
  loading = false,
  onRefresh,
  enableError = false,
}) {
  products = loading ? [{}, {}, {}, {}, {}, {}, {}] : products

  const [refresh, refreshSet] = useState(false)

  useEffect(() => {
    if (refresh) refreshSet(false)
  }, [refresh])

  const handleRefresh = () => {
    refreshSet(true)
    onRefresh && onRefresh()
  }

  return (
    <View style={[Styles.container, container]}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        }
      >
        {products.length
          ? products.map((item, index) => (
              <HCart
                loading={loading}
                product={item}
                index={index}
                key={index}
                startingSpace={startingSpace}
                index={index}
                lastIndex={index === products.length - 1}
              />
            ))
          : !loading &&
            enableError && (
              <NoDataFound
                text={"Sorry, no product avilable for this category!"}
                fullScreen={true}
              />
            )}
      </ScrollView>
    </View>
  )
}
