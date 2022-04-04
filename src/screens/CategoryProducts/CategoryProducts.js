/** @format */

import React, { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
// CHILD
import Categories from "./Components/Categories"
// COMPONENTS
import { TheContainer } from "../../components/molecules/TheContainer"
import { VPList } from "../../components/molecules/VPList"
// REDUX
import { fetchProductsByCategoryId } from "../../redux/modules/product/action"
// STYLE
import { BAR_STYLE_DARK, WHITE } from "../../styles/colors"
import Styles from "./Style"
import { TheBottomTab } from "../../components/molecules/TheBottomTab"
import { errorMessage } from "../../utils/common"

export default function CategoryProducts({ navigation, route }) {
  const dispatch = useDispatch(),
    { fetchCategoryProductsPending } = useSelector((state) => state.product),
    [category, setCategory] = useState({}),
    [activeCategoryId, setActiveCategoryId] = useState(route.params?.id || "")

  useEffect(() => {
    getProductByCategoryId(activeCategoryId)
  }, [activeCategoryId])

  const getProductByCategoryId = useCallback(
    (id) => {
      id = id || activeCategoryId
      const onSuccess = ({ data }) => setCategory(data)
      const onFail = ({ message }) => errorMessage(message)
      dispatch(
        fetchProductsByCategoryId({
          data: id ? { id } : null,
          onSuccess,
          onFail,
        })
      )
    },
    [activeCategoryId]
  )

  return (
    <>
      <TheContainer
        container={Styles.theContainer}
        statusBarColor={WHITE}
        barStyle={BAR_STYLE_DARK}
        showStatusBar
      >
        <Categories
          Styles={Styles}
          dispatch={dispatch}
          setActiveCategoryId={setActiveCategoryId}
          activeCategoryId={activeCategoryId}
        />
        <VPList
          container={Styles.lisContainer}
          products={category?.products || []}
          loading={fetchCategoryProductsPending}
          onRefresh={getProductByCategoryId}
          enableError={true}
        />
      </TheContainer>
      <TheBottomTab navigation={navigation} route={route} />
    </>
  )
}
