"use client"
import React from 'react'
import { Pagination } from "flowbite-react";

function PaginationComp({ nPages1, currentPage,  onPageChange }) {

  return (
    <>
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={nPages1} onPageChange={onPageChange} showIcons/>
    </div>
    </>
  )
}
export default PaginationComp