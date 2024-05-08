
export const GET_POSTS_SIGN_QUERY = `mutation($singData: MemberDetails!) {
  memberRegister(
    input:$singData
  )
}
  `;
  export const GET_POSTS_LOGIN_QUERY =`mutation($email:String!,$password:String!){
    templateMemberLogin(
      email:$email
      password:$password
    )
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
        sku
       defaultPrice
        isActive
        discountPrice
        specialPrice 
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
      Count
      cartSummary{
        subTotal
        shippingAmount
        totalTax
        totalCost
        totalQuantity
      }
    }
  }`;

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
        sku
        createdOn
        orderDetails{
          id
          orderId
          productId
          quantity
          price
          status
          tax
          paymentMode
          orderUniqueId
        } 
      }
      count
    }
  }`

  export const GET_CHECKOUT=`mutation ecommerceOrderPlacement($summ:OrderSummary,$mode: String!,$addr: String!,$prod: [orderProduct!]!){
    ecommerceOrderPlacement(paymentMode: $mode,shippingAddress: $addr,orderProducts: $prod, orderSummary: $summ)
  }`

  export const GET_PRODUCT_DETAIL=`query($slug: String){
    ecommerceProductOrderDetails(productSlug: $slug){
      id
        productName
        categoriesId
        productSlug
        productDescription
        productImagePath
        createdOn
        sku
        orderDetails{
          id
          orderId
          productId
          quantity
          price
          status
          tax
          paymentMode
          orderUniqueId
        } 
    }
  }`