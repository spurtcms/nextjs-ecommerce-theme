'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { fetchGraphQl } from '../graphicql'
import { CategoryQuery, MemberProfileDetailQuery, ProfileNameCheckQuery } from '../query'

export async function Rememberme(data) {
    let sess = cookies().get("remeber-key")
    if (data) {
    } else {
        if (sess?.value === "remeber") {
        }
        if (sess?.value === "not-rember") {
            cookies().set("remeber-key", "")
            redirect("/auth/login")
        }
    }

}

export async function ChildCategoryList(CategoryParentID, setChildCategory) {
    let variable = { "level": 1, "groupid": CategoryParentID, "checkEntriesPresence": 1 }
    let category = await fetchGraphQl(CategoryQuery, variable)
    let categoryList = await category?.categoriesList?.categories
    // setChildCategory(categoryList)
    return categoryList
}

 export const MemberDetailApi = async (profileSlug) => {
    let variables = { "slug": profileSlug, }
    let comapny = await fetchGraphQl(MemberProfileDetailQuery, variables)
    return comapny.data?.getMemberProfileDetails

}
