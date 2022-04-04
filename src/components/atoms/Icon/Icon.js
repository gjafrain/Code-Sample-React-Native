/** @format */

import React from "react"
import { View, ActivityIndicator, Image, TouchableOpacity } from "react-native"
//
import Styles from "./Style"
/// IMAGES
import BasketBg from "../../../assets/icons/basket-bg.png"
import Basket from "../../../assets/icons/basket.png"
import Cross from "../../../assets/icons/cross.png"
import Minus from "../../../assets/icons/minus.png"
import Plus from "../../../assets/icons/add.png"
import RightArrow from "../../../assets/icons/right-arrow.png"
import Tick from "../../../assets/icons/tick.png"
import Back from "../../../assets/icons/right-arrow-angle.png"
import Home from "../../../assets/icons/home-1.png"
import HomeFilled from "../../../assets/icons/home-bg.png"
import UserFilled from "../../../assets/icons/user-bg.png"
import User from "../../../assets/icons/user.png"
import Search from "../../../assets/icons/search.png"
import SearchFilled from "../../../assets/icons/search-bg.png"
import Sidebar from "../../../assets/icons/sidebar.png"
import Category from "../../../assets/icons/vegetable.png"
import CategoryFilled from "../../../assets/icons/vegetable-filled.png"
import Coupon from "../../../assets/icons/coupon.png"
import Nutrition from "../../../assets/icons/nutrition.png"
import Faq from "../../../assets/icons/faq.png"
import Condition from "../../../assets/icons/condition.png"
import Policy from "../../../assets/icons/policy.png"
import Logout from "../../../assets/icons/logout.png"
import Login from "../../../assets/icons/login.png"
import Filter from "../../../assets/icons/filter.png"
import List from "../../../assets/icons/list.png"
import Box from "../../../assets/icons/box.png"
import ShortAtoZ from "../../../assets/icons/sort-asc.png"
import ShortZtoA from "../../../assets/icons/sort-desc.png"
import Address from "../../../assets/icons/address.png"
import Support from "../../../assets/icons/support.png"
import Bookmark from "../../../assets/icons/bookmark.png"
import BookmarkFilled from "../../../assets/icons/bookmark-bg.png"
import Office from "../../../assets/icons/office.png"
import Other from "../../../assets/icons/other.png"
import Trash from "../../../assets/icons/trash.png"
import LocationMarker from "../../../assets/icons/location-pin.png"
import LocationPin from "../../../assets/icons/pin.png"
import About from "../../../assets/icons/about.png"
import Bug from "../../../assets/icons/bug.png"
import FeatureRequest from "../../../assets/icons/hand-shake.png"
import Feedback from "../../../assets/icons/rating.png"
import Query from "../../../assets/icons/query.png"
import Favorite from "../../../assets/icons/favorite.png"
import CurrentLocation from "../../../assets/icons/current-location.png"
import StoreFilled from "../../../assets/icons/store-bg.png"
import Store from "../../../assets/icons/store.png"
//
import { WHITE } from "../../../styles/colors"

export default function Icon({
  name = "Basket",
  size = "l",
  imageStyle = {},
  onPress,
  container = { ...Styles.container },
  loader = false,
  loaderColor = WHITE,
}) {
  const iconImage = () => {
    switch (name) {
      case "StoreFilled":
        return <Image source={StoreFilled} style={[Styles[size], imageStyle]} />
        case "Store":
        return <Image source={Store} style={[Styles[size], imageStyle]} />
      case "BasketBg":
        return <Image source={BasketBg} style={[Styles[size], imageStyle]} />
      case "Cross":
        return <Image source={Cross} style={[Styles[size], imageStyle]} />
      case "Minus":
        return <Image source={Minus} style={[Styles[size], imageStyle]} />
      case "Plus":
        return <Image source={Plus} style={[Styles[size], imageStyle]} />
      case "RightArrow":
        return <Image source={RightArrow} style={[Styles[size], imageStyle]} />
      case "Right":
        return <Image source={Back} style={[Styles[size], imageStyle]} />
      case "Tick":
        return <Image source={Tick} style={[Styles[size], imageStyle]} />
      case "Back":
        return (
          <Image
            source={Back}
            style={[Styles[size], Styles.trandform180, imageStyle]}
          />
        )
      case "Forward":
        return <Image source={Back} style={[Styles[size], imageStyle]} />
      case "Home":
        return <Image source={Home} style={[Styles[size], imageStyle]} />
      case "HomeFilled":
        return <Image source={HomeFilled} style={[Styles[size], imageStyle]} />
      case "User":
        return <Image source={User} style={[Styles[size], imageStyle]} />
      case "UserFilled":
        return <Image source={UserFilled} style={[Styles[size], imageStyle]} />
      case "Search":
        return <Image source={Search} style={[Styles[size], imageStyle]} />
      case "SearchFilled":
        return (
          <Image source={SearchFilled} style={[Styles[size], imageStyle]} />
        )
      case "Sidebar":
        return (
          <Image
            source={Sidebar}
            style={[Styles[size], Styles.trandform180, imageStyle]}
          />
        )
      case "Category":
        return <Image source={Category} style={[Styles[size], imageStyle]} />
      case "CategoryFilled":
        return (
          <Image source={CategoryFilled} style={[Styles[size], imageStyle]} />
        )
      case "Coupon":
        return <Image source={Coupon} style={[Styles[size], imageStyle]} />
      case "Nutrition":
        return <Image source={Nutrition} style={[Styles[size], imageStyle]} />
      case "Faq":
        return <Image source={Faq} style={[Styles[size], imageStyle]} />
      case "Condition":
        return <Image source={Condition} style={[Styles[size], imageStyle]} />
      case "Policy":
        return <Image source={Policy} style={[Styles[size], imageStyle]} />
      case "Logout":
        return <Image source={Logout} style={[Styles[size], imageStyle]} />
      case "Login":
        return <Image source={Login} style={[Styles[size], imageStyle]} />
      case "Filter":
        return <Image source={Filter} style={[Styles[size], imageStyle]} />
      case "List":
        return <Image source={List} style={[Styles[size], imageStyle]} />
      case "Box":
        return <Image source={Box} style={[Styles[size], imageStyle]} />
      case "ShortASC":
        return <Image source={ShortAtoZ} style={[Styles[size], imageStyle]} />
      case "ShortDESC":
        return <Image source={ShortZtoA} style={[Styles[size], imageStyle]} />
      case "Address":
        return <Image source={Address} style={[Styles[size], imageStyle]} />
      case "Support":
        return <Image source={Support} style={[Styles[size], imageStyle]} />
      case "Bookmark":
        return <Image source={Bookmark} style={[Styles[size], imageStyle]} />
      case "BookmarkFilled":
        return (
          <Image source={BookmarkFilled} style={[Styles[size], imageStyle]} />
        )
      case "Work":
        return <Image source={Office} style={[Styles[size], imageStyle]} />
      case "Other":
        return <Image source={Other} style={[Styles[size], imageStyle]} />
      case "Trash":
        return <Image source={Trash} style={[Styles[size], imageStyle]} />
      case "LocationMarker":
        return (
          <Image source={LocationMarker} style={[Styles[size], imageStyle]} />
        )
      case "LocationPin":
        return <Image source={LocationPin} style={[Styles[size], imageStyle]} />
      case "CurrentLocation":
        return (
          <Image source={CurrentLocation} style={[Styles[size], imageStyle]} />
        )
      case "About":
        return <Image source={About} style={[Styles[size], imageStyle]} />
      case "Bug":
        return <Image source={Bug} style={[Styles[size], imageStyle]} />
      case "FeatureRequest":
        return (
          <Image source={FeatureRequest} style={[Styles[size], imageStyle]} />
        )
      case "Feedback":
        return <Image source={Feedback} style={[Styles[size], imageStyle]} />
      case "Query":
        return <Image source={Query} style={[Styles[size], imageStyle]} />
      case "Favorite":
        return <Image source={Favorite} style={[Styles[size], imageStyle]} />
      default:
        return <Image source={Basket} style={[Styles[size], imageStyle]} />
    }
  }

  // if (loader) return;

  return (
    <TouchableOpacity
      disabled={!onPress}
      style={container}
      onPress={onPress}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      {loader ? (
        <ActivityIndicator
          color={loaderColor}
          style={[Styles[size], imageStyle]}
        />
      ) : (
        iconImage()
      )}
    </TouchableOpacity>
  )
}
