
// export const GET_POSTS_SIGN_QUERY = `mutation($singData: MemberDetails!) {
//   memberRegister(
//     input:$singData
//   )
// }
//   `;

  export const GET_POSTS_SIGN_QUERY = `mutation memberRegister($singData: MemberDetails!,$ecomModule:Int) {
    memberRegister(
      input:$singData,
      ecomModule:$ecomModule
    )
  }
    `;



  export const GET_POSTS_LOGIN_QUERY =`mutation($email:String!,$password:String!){
    templateMemberLogin(
      email:$email
      password:$password
    )
  }`

  export const GET_POST_ADDRESS_QUERY=`mutation($cd: customerInput!){
    customerProfileUpdate(customerDetails: $cd)
  }
  `

  export const GET_POST_VIEWCOUNT_QUERY=`mutation($pid: Int,$slug: String){
    UpdateProductViewCount(productId: $pid, productSlug: $slug)
  }`


  export const GET_POSTS_LIST_QUERY = `query ecommerceProductList(
    $limit: Int!,
    $offset: Int!,
    $filter: ProductFilter,
    $sort: ProductSort
  ) {
    ecommerceProductList(
      limit: $limit,
      offset: $offset,
      filter: $filter,
      sort: $sort
    ) {
      productList {
        id
        tax
        categoriesId
        productName
        productSlug
        productDescription
        productImagePath
        productImageArray
        productYoutubePath
        productVimeoPath
        sku
        defaultPrice
        isActive
        discountPrice
        specialPrice 
        viewCount
      }
      count
    }
  }
  
  `;


  export const GET_POSTS_SLUG_QUERY = `query ecommerceProductDetails(
    $productSlug: String!, 
  ){
    ecommerceProductDetails(productSlug:$productSlug){
      id
      categoriesId
      productName
      productDescription
      productImagePath
      productImageArray
      productYoutubePath
      productVimeoPath
      productSlug
      sku
      tax
      totalcost
      isActive
      createdOn
      discountPrice
      specialPrice 
      defaultPrice
  }
  }
  `;


 

  export const GET_MY_CART_QUERY=`query($limit: Int!,$offset: Int!){
    ecommerceCartList(limit: $limit,offset: $offset){
      cartList{
        id
        categoriesId
        productName
        productDescription
        productImagePath
        productImageArray
        sku
        tax
        totalcost
        isActive
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        isDeleted
        deletedOn
        deletedBy
        defaultPrice
        discountPrice
        specialPrice
        ecommerceCart{
          id
          productId
          customerId
          quantity
          createdOn
          modifiedOn
          isDeleted
          deletedOn
        }
      }
    
      
    }
  }
  `;

  export const Get_CATEGORIES_LIST = `query($categoryGroupId: Int!){
    categoriesList(categoryGroupId:$categoryGroupId){
      categories{
        id
        categoryName
        categorySlug
        parentId
      }
    }
  }`

  export const GET_REMOVE_CART_LIST=`mutation($pid: Int!){
    removeProductFromCartlist(productId: $pid)
  }`


  export const GET_ADD_TO_CART=`mutation ecommerceAddToCart($productId: Int!,$quantity: Int!){
    ecommerceAddToCart(productId:$productId,quantity:$quantity)
  }`

  export const GET_MY_ORDERED_LIST=`query($lim: Int!,$off: Int!,$filter: orderFilter,$sort: orderSort){
    ecommerceProductOrdersList(limit: $lim,offset:$off,filter: $filter,sort: $sort){
      productList{
        id
        productName
        categoriesId
        productSlug
        productDescription
        productImagePath
        productVimeoPath
        productYoutubePath
        sku
        tax
        totalcost
        isActive
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        isDeleted
        deletedBy
        deletedOn
        defaultPrice
        discountPrice
        specialPrice
        productImageArray
        orderId
        orderUniqueId
        orderQuantity
        orderPrice
        orderTax
        orderStatus
        orderCustomer
        orderTime
        paymentMode
        shippingDetails
      }
      count
    }

  }`

  export const GET_CHECKOUT=`mutation ecommerceOrderPlacement($summ:OrderSummary,$mode: String!,$addr: String!,$prod: [orderProduct!]!){
    ecommerceOrderPlacement(paymentMode: $mode,shippingAddress: $addr,orderProducts: $prod, orderSummary: $summ)
  }`

  export const GET_PRODUCT_DETAIL=`query($pid: Int,$pslug: String, $oid: Int!){
    ecommerceProductOrderDetails(productId: $pid, productSlug: $pslug, orderId: $oid){
      EcommerceProduct{
        id
        productName
        categoriesId
        productSlug
        productDescription
        productImagePath
        productVimeoPath
        productYoutubePath
        sku
        tax
        totalcost
        isActive
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        isDeleted
        deletedBy
        deletedOn
        defaultPrice
        discountPrice
        specialPrice
        productImageArray
        orderId
        orderUniqueId
        orderQuantity
        orderPrice
        orderTax
        orderStatus
        orderCustomer
        orderTime
        paymentMode
        shippingDetails
      }
      OrderStatuses{
        id
        orderId
        orderStatus
        createdBy
        createdOn
      }
  }
  }`




  export const GET_ADDRESS_DETAIL=`query{
    ecommerceCustomerDetails{
      id
      firstName
      lastName
      mobileNo
      email
      username
      isActive
      profileImage
      profileImagePath
      modifiedOn
      modifiedBy
      houseNo
      Area
      city
      state
      country
      zipCode
      streetAddress
    }
  }
  `