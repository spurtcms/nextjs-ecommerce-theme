
export const GET_POSTS_SIGN_QUERY = `mutation($singData: MemberDetails!) {
  memberRegister(
    input:$singData
  )
}
  `;
export const GET_POSTS_LOGIN_QUERY = `mutation($username:String!,$password:String!){
    templateMemberLogin(
      username:$username
      password:$password
    )
  }`


/// Category List Query
export const CategoryQuery = `
 query($limit: Int,$offset: Int,$level: Int,$groupid: Int,$checkEntriesPresence: Int){
      categoriesList(limit: $limit,offset:$offset,hierarchyLevel: $level,categoryGroupId: $groupid,checkEntriesPresence: $checkEntriesPresence){
        categories{
          id
          categoryName
          categorySlug
          description
          imagePath
          createdOn
          createdBy
          modifiedOn
          modifiedBy
          parentId
        }
        count
        
      }
    }`;


export const CategoryChildQuery = `
     query($limit: Int,$offset: Int,$level: Int,$groupid: Int,$checkEntriesPresence: Int,$slug:String){
      categoriesList(limit: $limit,offset:$offset,hierarchyLevel: $level,categoryGroupId: $groupid,checkEntriesPresence: $checkEntriesPresence,categoryGroupSlug:$slug){
        categories{
          id
          categoryName
          categorySlug
          description
          imagePath
          createdOn
          createdBy
          modifiedOn
          modifiedBy
          parentId
        }
        count
        
      }
    }
    `

/// Channel Entry List Query
export const ChannelEntriesListQuery = `
query($channelId: Int, $categoryId: Int,$limit: Int!,$offset: Int!,$keyword:String,$requireData: RequireData, $categorySlug: String,$categoryChildSlug:String){
  channelEntriesList(channelId: $channelId,categoryId: $categoryId, limit: $limit,offset: $offset,title:$keyword,requireData: $requireData, categorySlug: $categorySlug ,categoryChildSlug:$categoryChildSlug){
    channelEntriesList{
      id
      title
      slug
      description
      userId
      channelId
      status
      isActive
      createdOn
      createdBy
      modifiedBy
      modifiedOn
      coverImage
      thumbnailImage
      metaTitle
      metaDescription
      keyword
      categoriesId
      relatedArticles
      featuredEntry
      categories{
        id
        categoryName
        imagePath
        parentId
      }
      additionalFields{
        sections{
          sectionId
          sectionName
          sectionTypeId
          createdOn
          createdBy
          modifiedOn
          modifiedBY
          orderIndex
        }
        fields{
          fieldId
          fieldName
          fieldTypeId
          mandatoryField
          optionExist
          createdOn
          createdBy
          imagePath
          fieldValue{
            fieldValue
            id
          }
          
        }
      }
      memberProfile{
        memberId
        profileName
        companyLogo
        memberDetails
        profilePage 
        profileSlug
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        claimStatus
        linkedin
        twitter
        website
        companyName
        companyLocation
      }
      authorDetails{
        AuthorId
        FirstName
        LastName
        ProfileImagePath
        IsActive
        CreatedBy
      Email
      }
      tags
          publishedTime
          author
          createTime
          readingTime
          sortOrder
          imageAltTag
    }
    count
  }
}
    `;

/// Login Query
export const LoginQuery = `mutation($email: String!){
  memberLogin(email: $email)
}
`;

/// Login OTP Verify Query
export const LoginOTPVerifyQuery = `
mutation($otp: Int!,$email: String!){
  verifyMemberOtp(otp: $otp,email: $email){
   memberProfileData{
        memberId
        profileName
        companyLogo
        profilePage
        profileSlug
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        claimStatus
      }
    token
  }
}
`;

/// Member Profile Query
export const profileQuery = `
query{
  memberProfileDetails{
         id
    memberId
    profileName
    companyLogo
    profilePage
    profileSlug
    createdOn
    createdBy
    modifiedOn
    modifiedBy
    claimStatus
    companyName
    companyLocation
    about
    linkedin
    twitter
    website
  }
}
`;


export const memberProfile = `
query($id:Int,$slug: String){
  getMemberProfileDetails(id:$id,profileSlug:$slug){
        id
        memberId
        profileName
        companyLogo
        profilePage
        profileSlug
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        claimStatus
        memberDetails
        companyName
        companyLocation
        about
        linkedin
        twitter
        website
    
  }
}
`


/// ClaimNow Profilename Check Query
export const ProfileNameCheckQuery = `
mutation($profileSlug: String!,$profileId : Int!){
  profileNameVerification(profileSlug: $profileSlug,profileId: $profileId)
}
`
/// ClaimNow Query
export const claimNowQuery = `
mutation($claim: ClaimData!,$profileId:Int,$profileSlug: String ){
  memberclaimnow(input: $claim,profileSlug:$profileSlug,profileId:$profileId)
}
`;

/// Channel Detail Query
export const MemberProfileDetailQuery = `
query($id: Int,$slug: String){
  getMemberProfileDetails(id: $id,profileSlug: $slug){
    id
    memberId
    profileSlug
    memberDetails
    profileName
    profilePage
    companyName
    companyLocation
    memberDetails
    companyLogo
    about
    seoTitle
    seoDescription
    seoKeyword
    linkedin
    twitter
    website
    createdBy
    createdOn
    modifiedOn
    modifiedBy
    claimStatus
  }
}
`;

/// Company Detail Update Query
export const CompanyDetailUpdateQuery = `
mutation memeberProfUpdate($profiledata: ProfileData!){
  memberProfileUpdate(profiledata:$profiledata)
}
`
// mutation($profiledata : ProfileData!){
//   memberProfileUpdate(profiledata: $profiledata)
// }

export const MyRofileUpdateQuery = `
  mutation memberUpdate($memberData:MemberDetails!){
  memberUpdate(memberdata:$memberData)
}
 `
//  mutation($memberdata: MemberDetails!){
//   memberUpdate(memberdata: $memberdata)
// }

export const MyRofileDetailQuery = `query{
  getMemberDetails{
    id
    firstName
    lastName
    email
    mobileNo
    isActive
    profileImage
    profileImagePath
    createdOn
    createdBy
    modifiedOn
    modifiedBy
    memberGroupId
    password
    username
  }
}
 `
export const changePasswordMutation = `mutation($op: String!,$np: String!,$cp: String! ){
  memberPasswordUpdate(oldPassword: $op,newPassword: $np, confirmPassword: $cp)
}
 `

// channel entries Slug list

export const ChannelEntriesSlugListQuery = `query($slug:String){
      channelEntryDetail(slug:$slug){
        id
        title
        slug
        description
        userId
        channelId
        status
        isActive
        createdOn
        createdBy
        modifiedBy
        modifiedOn
        coverImage
        thumbnailImage
        metaTitle
        metaDescription
        keyword
        categoriesId
        relatedArticles
        featuredEntry
        viewCount
        readingTime
       categories{
        id
        categoryName
        description
        categorySlug
        imagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        parentId
        __typename
      }
      author
        authorDetails{
          AuthorId
          FirstName
          LastName
          ProfileImagePath
        }
      }
    }`