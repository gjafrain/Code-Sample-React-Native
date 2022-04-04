/** @format */

import React, { useEffect, useState, useRef } from "react"
import {} from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
// import {  } from 'react-native-gesture-handler';
import { useSelector } from "react-redux"
import { SkeletonLoader } from "../../../components/atoms/SkeletonLoader"
import { fetchAllCategories } from "../../../redux/modules/category/action"
import { WINDOW_WIDTH } from "../../../styles/mixins"
import { errorMessage, Localize } from "../../../utils/common"

export default function Categories({
  dispatch,
  Styles,
  activeCategoryId,
  setActiveCategoryId,
}) {
  const { fetchAllCategoriesPending, allCategories } = useSelector(
      (state) => state.category
    ),
    flatListRef = useRef(null),
    [dataSourceCords, setDataSourceCords] = useState({})

  useEffect(() => {
    !allCategories?.length && getAllCategories()
  }, [])

  const getAllCategories = () => {
    const onFail = ({ message }) => errorMessage(message)
    dispatch(fetchAllCategories({ onFail }))
  }

  const onClickCategory = (id) => {
    setActiveCategoryId(id)
    scrollCategory(id)
  }

  const scrollCategory = (id, viewSourceCords = dataSourceCords) => {
    const scrollOffSet = (WINDOW_WIDTH - viewSourceCords[id]?.width || 0) / 2
    flatListRef.current.scrollToOffset({
      offset: viewSourceCords[id]?.x - scrollOffSet,
      animated: true,
    })
  }

  const _renderItems = ({ item, index }) => {
    return fetchAllCategoriesPending ? (
      <SkeletonLoader
        container={Styles.skeletonLoadingContainer}
        linearContainer={Styles.skeletonLinearLoadingContainer}
        width={Styles.skeletonLinearLoadingContainer.width}
      />
    ) : (
      <>
        {index === 0 ? (
          <TouchableOpacity
            onPress={() => onClickCategory("", 0)}
            style={[
              Styles.categorySection,
              !activeCategoryId && Styles.activeCategory,
            ]}
            key={0}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout
              dataSourceCords[0] = { width: layout?.width, x: 0 }
              setDataSourceCords(dataSourceCords)
            }}
          >
            <Text
              style={[
                Styles.categoryLabel,
                !activeCategoryId && Styles.activeCategoryLabel,
              ]}
            >
              {Localize(Localize(global.consts.ALL_VEGITABLES_FRUITS))}
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}

        <TouchableOpacity
          onPress={() => onClickCategory(item.id, index + 1)}
          style={[
            Styles.categorySection,
            item.id == activeCategoryId && Styles.activeCategory,
          ]}
          key={index + 1}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout
            dataSourceCords[item.id] = {
              width: layout?.width,
              x: dataSourceCords[index]?.width + dataSourceCords[index]?.x,
            }
            setDataSourceCords(dataSourceCords)
            activeCategoryId === item.id &&
              scrollCategory(item.id, dataSourceCords)
          }}
        >
          <Text
            style={[
              Styles.categoryLabel,
              item.id == activeCategoryId && Styles.activeCategoryLabel,
            ]}
          >
            {Localize(item.name)}
          </Text>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <View style={Styles.categoriesContainer}>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={fetchAllCategoriesPending ? [{}, {}, {}, {}, {}] : allCategories}
        renderItem={_renderItems}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
