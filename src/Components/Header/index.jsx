import Link from 'next/link';

function Header() {
  return (
    <>
     <div className=" lg:px-10 px-5 py-[13px] ">
              <div className="relative flex  items-center justify-between ">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-4">
                  {/* logo */}
                  <Link href='/' prefetch className="block min-w-20 cursor-pointer ">
                    <img
                      src="/img/ownLogo.svg"
                      alt="logo"
                      className="min-h-[54px] max-w-fit dark:hidden"
                      width={88}
                      height={54}
                    />
                    <img
                      src="/img/ownLogo-dark.svg"
                      alt="logo"
                      className="min-h-[54px] max-w-fit hidden dark:block"
                      width={88}
                      height={54}
                    />
                  </Link>
                  </div>
                  </div>
                  </div>

    </>
  )
}

export default Header
