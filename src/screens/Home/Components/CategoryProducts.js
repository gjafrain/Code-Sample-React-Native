/** @format */

import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
// COMPONENTS
import { Section } from "../../../components/molecules/Section"
import { HPList } from "../../../components/molecules/HPList"
import { VPList } from "../../../components/molecules/VPList"
import { Localize } from "../../../utils/common"
import commonStyle from "../../../styles/commonStyle"
import { Icon } from "../../../components/atoms/Icon"
import { SkeletonLoader } from "../../../components/atoms/SkeletonLoader"

export default function CategoryProducts({
  Styles = {},
  title = "",
  isVerticalList = false,
  navigation,
  data = [],
  categoryId,
  loading = false,
}) {
  data = loading ? [{}, {}, {}, {}, {}] : data

  return data.length ? (
    <Section style={Styles.customSection}>
      <View
        style={[
          commonStyle.fRow,
          commonStyle.spaceBetween,
          commonStyle.alignCenter,
        ]}
      >
        <Text style={Styles.categoryTitle}>
          {" "}
          {!loading ? (
            Localize(title)
          ) : (
            <SkeletonLoader
              linearContainer={Styles.categoryTitleLinearLoadingContainer}
            />
          )}
        </Text>
        {categoryId && data.length > 2 && !loading && (
          <TouchableOpacity
            hitSlop={{ top: 40, bottom: 20, left: 40, right: 40 }}
            onPress={() =>
              navigation.navigate("CategoryProducts", {
                id: categoryId,
                name: title,
              })
            }
            style={[commonStyle.fRow, commonStyle.alignCenter]}
          >
            <Text style={Styles.viewAllBtn}>View All</Text>
            <Icon name='Right' size='mini' imageStyle={Styles.viewAllIcon} />
          </TouchableOpacity>
        )}
      </View>
      {
        // isVerticalList ?
        //     <VPList products={data} loading={loading} />
        //     :
        <HPList products={data} loading={loading} />
      }
    </Section>
  ) : (
    <></>
  )
}
