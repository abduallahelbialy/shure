<template>
  <div class="payments">
    <div class="cards  flex justify-between gap-3 w-full overflow-hidden ">
      <div
        class="card min-w-[285px] flex flex-col justify-between rounded-[38px] bg-white py-[25px] px-[20px]"
      >
        <div class="icon mb-[12px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.625C4.61425 0.625 0.25 4.99 0.25 10.375C0.25 15.76 4.61425 20.125 10 20.125C15.3842 20.125 19.75 15.76 19.75 10.375C19.75 4.99 15.385 0.625 10 0.625ZM9.92125 18.2703C5.572 18.2703 2.04625 14.7445 2.04625 10.3953C2.04625 6.046 5.572 2.52025 9.92125 2.52025C14.2698 2.52025 17.7962 6.046 17.7962 10.3953C17.7962 14.7445 14.2698 18.2703 9.92125 18.2703ZM12.1975 10.8483H9.9625V7.07425C9.9625 6.66475 9.63025 6.33175 9.22075 6.33175C8.81125 6.33175 8.47825 6.664 8.47825 7.07425V11.59C8.47825 12.0003 8.8105 12.3317 9.22075 12.3317H12.1975C12.6077 12.3317 12.94 12.0003 12.94 11.59C12.94 11.1805 12.6077 10.8483 12.1975 10.8483Z"
              fill="#005DBA"
            />
          </svg>
        </div>
        <div class="title text-[13px] font-semibold">
          {{ $t("dashboard_pages.payments.cards.card-1") }}
        </div>
        <div class="footer flex justify-between">
          <div class="price">
            <span class="count text-[32px] font-bold">200</span>
            <span class="currency text-[#5a5a5a] font-semibold ms-2">
              {{ $t("dashboard_pages.payments.cards.currency") }}
            </span>
          </div>
          <div class="discount text-[32px] font-bold text-[#005dba]">01</div>
        </div>
      </div>
      <div
        class="card min-w-[285px] flex flex-col justify-between rounded-[38px] bg-white py-[25px] px-[20px]"
      >
        <div class="icon mb-[12px]">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.625C4.61425 0.625 0.25 4.99 0.25 10.375C0.25 15.76 4.61425 20.125 10 20.125C15.3842 20.125 19.75 15.76 19.75 10.375C19.75 4.99 15.385 0.625 10 0.625ZM9.92125 18.2703C5.572 18.2703 2.04625 14.7445 2.04625 10.3953C2.04625 6.046 5.572 2.52025 9.92125 2.52025C14.2698 2.52025 17.7962 6.046 17.7962 10.3953C17.7962 14.7445 14.2698 18.2703 9.92125 18.2703ZM12.1975 10.8483H9.9625V7.07425C9.9625 6.66475 9.63025 6.33175 9.22075 6.33175C8.81125 6.33175 8.47825 6.664 8.47825 7.07425V11.59C8.47825 12.0003 8.8105 12.3317 9.22075 12.3317H12.1975C12.6077 12.3317 12.94 12.0003 12.94 11.59C12.94 11.1805 12.6077 10.8483 12.1975 10.8483Z"
              fill="#005DBA"
            />
          </svg>
        </div>
        <div class="title text-[13px] font-semibold">
          {{ $t("dashboard_pages.payments.cards.card-2") }}
        </div>
        <div class="footer flex justify-between">
          <div class="price">
            <span class="count text-[32px] font-bold">100</span>
            <span class="currency text-[#5a5a5a] font-semibold ms-2">
              {{ $t("dashboard_pages.payments.cards.currency") }}
            </span>
          </div>
          <div class="discount text-[32px] font-bold text-[#005dba]">01</div>
        </div>
      </div>
      <div
        class="card min-w-[285px] flex flex-col justify-between rounded-[38px] bg-white py-[25px] px-[20px]"
      >
        <div class="icon mb-[12px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.8086 6.25047H20.1686C19.9786 5.98047 19.7786 5.73047 19.5686 5.48047L18.8086 6.25047Z"
              fill="#005DBA"
            />
            <path
              d="M18.52 4.42031C18.27 4.21031 18.02 4.01031 17.75 3.82031V5.18031L18.52 4.42031Z"
              fill="#005DBA"
            />
            <path
              d="M19.5795 5.48141L22.5295 2.53141C22.8195 2.24141 22.8195 1.76141 22.5295 1.47141C22.2395 1.18141 21.7595 1.18141 21.4695 1.47141L18.5195 4.42141C18.8995 4.75141 19.2495 5.11141 19.5795 5.48141Z"
              fill="#005DBA"
            />
            <path
              d="M17.7517 3C17.7517 2.59 17.4117 2.25 17.0017 2.25C16.6017 2.25 16.2817 2.57 16.2617 2.96C16.7817 3.21 17.2817 3.49 17.7517 3.82V3Z"
              fill="#005DBA"
            />
            <path
              d="M21.7519 7C21.7519 6.59 21.4119 6.25 21.0019 6.25H20.1719C20.5019 6.72 20.7919 7.22 21.0319 7.74C21.4319 7.72 21.7519 7.4 21.7519 7Z"
              fill="#005DBA"
            />
            <path
              d="M12.75 14.7508H13.05C13.44 14.7508 13.75 14.4008 13.75 13.9708C13.75 13.4308 13.6 13.3508 13.26 13.2308L12.75 13.0508V14.7508Z"
              fill="#005DBA"
            />
            <path
              d="M21.04 7.74C21.03 7.74 21.02 7.75 21 7.75H17C16.9 7.75 16.81 7.73 16.71 7.69C16.53 7.61 16.38 7.47 16.3 7.28C16.27 7.19 16.25 7.1 16.25 7V3C16.25 2.99 16.26 2.98 16.26 2.96C14.96 2.35 13.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.48 21.65 9.04 21.04 7.74ZM13.75 11.82C14.39 12.04 15.25 12.51 15.25 13.98C15.25 15.23 14.26 16.26 13.05 16.26H12.75V16.51C12.75 16.92 12.41 17.26 12 17.26C11.59 17.26 11.25 16.92 11.25 16.51V16.26H11.17C9.84 16.26 8.75 15.14 8.75 13.76C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H11.25V12.53L10.25 12.18C9.61 11.96 8.75 11.49 8.75 10.02C8.75 8.77 9.74 7.74 10.95 7.74H11.25V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V7.75H12.83C14.16 7.75 15.25 8.87 15.25 10.25C15.25 10.66 14.91 11 14.5 11C14.09 11 13.75 10.66 13.75 10.25C13.75 9.7 13.34 9.25 12.83 9.25H12.75V11.47L13.75 11.82Z"
              fill="#005DBA"
            />
            <path
              d="M10.25 10.03C10.25 10.57 10.4 10.65 10.74 10.77L11.25 10.95V9.25H10.95C10.57 9.25 10.25 9.6 10.25 10.03Z"
              fill="#005DBA"
            />
          </svg>
        </div>
        <div class="title text-[13px] font-semibold">
          {{ $t("dashboard_pages.payments.cards.card-3") }}
        </div>
        <div class="footer flex justify-between">
          <div class="price">
            <span class="count text-[32px] font-bold">45</span>
            <span class="currency text-[#5a5a5a] font-semibold ms-2">
              {{ $t("dashboard_pages.payments.cards.currency") }}
            </span>
          </div>
          <div class="discount text-[32px] font-bold text-[#65CE00]">15%</div>
        </div>
      </div>
      <div
        class="card min-w-[285px] flex flex-col justify-between rounded-[38px] bg-white py-[25px] px-[20px]"
      >
        <div class="icon mb-[12px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.8086 6.25047H20.1686C19.9786 5.98047 19.7786 5.73047 19.5686 5.48047L18.8086 6.25047Z"
              fill="#005DBA"
            />
            <path
              d="M18.52 4.42031C18.27 4.21031 18.02 4.01031 17.75 3.82031V5.18031L18.52 4.42031Z"
              fill="#005DBA"
            />
            <path
              d="M19.5795 5.48141L22.5295 2.53141C22.8195 2.24141 22.8195 1.76141 22.5295 1.47141C22.2395 1.18141 21.7595 1.18141 21.4695 1.47141L18.5195 4.42141C18.8995 4.75141 19.2495 5.11141 19.5795 5.48141Z"
              fill="#005DBA"
            />
            <path
              d="M17.7517 3C17.7517 2.59 17.4117 2.25 17.0017 2.25C16.6017 2.25 16.2817 2.57 16.2617 2.96C16.7817 3.21 17.2817 3.49 17.7517 3.82V3Z"
              fill="#005DBA"
            />
            <path
              d="M21.7519 7C21.7519 6.59 21.4119 6.25 21.0019 6.25H20.1719C20.5019 6.72 20.7919 7.22 21.0319 7.74C21.4319 7.72 21.7519 7.4 21.7519 7Z"
              fill="#005DBA"
            />
            <path
              d="M12.75 14.7508H13.05C13.44 14.7508 13.75 14.4008 13.75 13.9708C13.75 13.4308 13.6 13.3508 13.26 13.2308L12.75 13.0508V14.7508Z"
              fill="#005DBA"
            />
            <path
              d="M21.04 7.74C21.03 7.74 21.02 7.75 21 7.75H17C16.9 7.75 16.81 7.73 16.71 7.69C16.53 7.61 16.38 7.47 16.3 7.28C16.27 7.19 16.25 7.1 16.25 7V3C16.25 2.99 16.26 2.98 16.26 2.96C14.96 2.35 13.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.48 21.65 9.04 21.04 7.74ZM13.75 11.82C14.39 12.04 15.25 12.51 15.25 13.98C15.25 15.23 14.26 16.26 13.05 16.26H12.75V16.51C12.75 16.92 12.41 17.26 12 17.26C11.59 17.26 11.25 16.92 11.25 16.51V16.26H11.17C9.84 16.26 8.75 15.14 8.75 13.76C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H11.25V12.53L10.25 12.18C9.61 11.96 8.75 11.49 8.75 10.02C8.75 8.77 9.74 7.74 10.95 7.74H11.25V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V7.75H12.83C14.16 7.75 15.25 8.87 15.25 10.25C15.25 10.66 14.91 11 14.5 11C14.09 11 13.75 10.66 13.75 10.25C13.75 9.7 13.34 9.25 12.83 9.25H12.75V11.47L13.75 11.82Z"
              fill="#005DBA"
            />
            <path
              d="M10.25 10.03C10.25 10.57 10.4 10.65 10.74 10.77L11.25 10.95V9.25H10.95C10.57 9.25 10.25 9.6 10.25 10.03Z"
              fill="#005DBA"
            />
          </svg>
        </div>
        <div class="title text-[13px] font-semibold">
          {{ $t("dashboard_pages.payments.cards.card-4") }}
        </div>
        <div class="footer flex justify-between items-end gap-8">
          <div class="price">
            <span class="count text-[32px] font-bold">345</span>
            <span class="currency text-[#5a5a5a] font-semibold ms-2">
              {{ $t("dashboard_pages.payments.cards.currency") }}
            </span>
          </div>
          <div class="discount text-[10px] font-medium text-[#8A8A8A]">
            {{ $t("dashboard_pages.payments.cards.vat") }}
          </div>
        </div>
      </div>
    </div>
    <div class="sections mt-5 text-[12px] flex justify-between">
      <div class="section-1 text-[12px] w-[600px] me-6">
        <div class="summary font-bold rounded-t-[38px] bg-white py-10 px-9">
          <div class="title mb-5">
            {{ $t("dashboard_pages.payments.summary.summary") }}
          </div>
          <div class="flex justify-between">
            <div class="text-[#5a5a5a] font-semibold">
              {{ $t("dashboard_pages.payments.cards.card-4") }}
            </div>
            <div class="text-[#005dba]">
              345 {{ $t("dashboard_pages.payments.cards.currency") }}
            </div>
          </div>
        </div>
        <div class="warning flex items-center gap-4 bg-white py-10 px-9 my-3">
          <div class="icon">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="50" rx="25" fill="#E4A200" />
              <path
                d="M23.5417 17.707H26.4584V27.9154H23.5417V17.707ZM23.5417 29.3737H26.4584V32.2904H23.5417V29.3737Z"
                fill="white"
              />
              <path
                d="M39.1561 18.135L31.8644 10.8433C31.7292 10.7076 31.5685 10.6 31.3916 10.5267C31.2146 10.4533 31.0249 10.4157 30.8334 10.416H19.1667C18.9751 10.4157 18.7854 10.4533 18.6085 10.5267C18.4315 10.6 18.2708 10.7076 18.1356 10.8433L10.844 18.135C10.7083 18.2702 10.6007 18.4309 10.5274 18.6078C10.454 18.7848 10.4164 18.9745 10.4167 19.166V30.8327C10.4167 31.2206 10.5698 31.591 10.844 31.8637L18.1356 39.1554C18.2708 39.2911 18.4315 39.3987 18.6085 39.472C18.7854 39.5454 18.9751 39.583 19.1667 39.5827H30.8334C31.2213 39.5827 31.5917 39.4296 31.8644 39.1554L39.1561 31.8637C39.2918 31.7285 39.3994 31.5678 39.4727 31.3909C39.546 31.2139 39.5836 31.0242 39.5834 30.8327V19.166C39.5836 18.9745 39.546 18.7848 39.4727 18.6078C39.3994 18.4309 39.2918 18.2702 39.1561 18.135ZM36.6667 30.2289L30.2296 36.666H19.7704L13.3334 30.2289V19.7698L19.7704 13.3327H30.2296L36.6667 19.7698V30.2289Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="font-bold">
            {{ $t("dashboard_pages.payments.summary.warning") }}
          </div>
        </div>
        <div class="payment bg-white py-10 px-9 mb-3">
          <div class="font-bold mb-4">
            {{ $t("dashboard_pages.payments.summary.payment") }}
          </div>
          <div class="font-bold mb-6">
            {{ $t("dashboard_pages.payments.summary.amounts-due") }}
          </div>
          <div class="text-[#5a5a5a]">
            <div class="flex justify-between mb-6 font-bold">
              <div class="">
                {{ $t("dashboard_pages.payments.cards.card-4") }}
              </div>
              <div class="text-[#005dba]">
                300 {{ $t("dashboard_pages.payments.cards.currency") }}
              </div>
            </div>
            <div class="flex justify-between mb-6 font-bold">
              <div class="">
                {{ $t("dashboard_pages.payments.cards.card-1") }}
              </div>
              <div class="text-[#005dba]">01</div>
            </div>
            <div class="flex justify-between mb-6 font-bold">
              <div class="">
                {{ $t("dashboard_pages.payments.cards.card-2") }}
              </div>
              <div class="text-[#005dba]">01</div>
            </div>
            <div class="flex justify-between font-bold">
              <div class="">
                {{ $t("dashboard_pages.payments.cards.card-3") }}
              </div>
              <div class="text-[#005dba]">
                45 {{ $t("dashboard_pages.payments.cards.currency") }}
              </div>
            </div>
          </div>
        </div>
        <div class="total-amount rounded-b-[38px] bg-white py-10 px-9">
          <div class="title font-bold mb-5">
            {{ $t("dashboard_pages.payments.cards.card-4") }}
          </div>
          <div class="flex font-bold justify-between">
            <div class="text-[#5a5a5a]">
              {{ $t("dashboard_pages.payments.summary.approximate") }}
            </div>
            <div class="text-[#005dba] text-[16px]">
              345 {{ $t("dashboard_pages.payments.cards.currency") }}
            </div>
          </div>
        </div>
      </div>
      <div class="section-2 w-[830px]">
        <div class="head bg-white py-20 px-9">
          <div class="title font-bold mb-6">
            <span></span>
            {{ $t("dashboard_pages.payments.summary.payment-management") }}
          </div>
          <div class="row flex justify-between">
            <div class="w-[48%] relative">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.search-by-id")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="number"
                :placeholder="
                  $t('dashboard_pages.dashboard.form.search-placeholders')
                "
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="w-[48%] relative">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.search-by-id")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="number"
                :placeholder="
                  $t('dashboard_pages.dashboard.form.search-placeholders')
                "
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div class="row flex justify-between mt-6 items-center gap-3">
            <div class="w-full relative">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.Patient")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="number"
                :placeholder="
                  $t('dashboard_pages.dashboard.form.search-placeholders')
                "
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <select class="num-ui">
              <option  v-for="nm in nums" :key="nm.id" :value="nm.id">
                {{ nm.num }}
              </option>
            </select>
          </div>
          <div class="row flex justify-between mt-7 mb-3">
            <div class="w-[48%] relative">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.Patient")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="number"
                :placeholder="
                  $t('dashboard_pages.dashboard.form.search-placeholders')
                "
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="w-[48%] relative">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.Patient")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="number"
                :placeholder="
                  $t('dashboard_pages.dashboard.form.search-placeholders')
                "
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div class="row flex justify-between mt-7 mb-3">
            <div class="w-[48%] relative">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.Patient")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="number"
                :placeholder="
                  $t('dashboard_pages.dashboard.form.search-placeholders')
                "
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="w-[48%] relative">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.Patient")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="number"
                :placeholder="
                  $t('dashboard_pages.dashboard.form.search-placeholders')
                "
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div
            class="btns flex justify-center mt-7 rounded-[36px] w-[222px] m-auto p-[10px] h-[55px] text-white font-bold"
          >
            <button class="flex justify-center items-center gap-3" @click="goreview">
              {{ $t("dashboard_pages.dashboard.form.btns.Follow")  }}
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 4.5H1M13 4.5L10 1.5M13 4.5L10 7.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="total-amount rounded-b-[38px] bg-white py-10 px-9 mt-4">
          <div class="mb-3">
            <div class="flex gap-3 items-center">
              <div
                class="p-[10px] w-[40px] h-[40px] bg-black text-white rounded-[18px] text-center font-bold"
              >
                <p>02</p>
              </div>
              <p class="font-bold">{{ $t("dashboard_pages.dashboard.form.btns.Step")}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const nums = [
  { id: 1, value: 1, num: "+966" },
  { id: 1, value: 2, num: "+20" },
  { id: 1, value: 3, num: "+01" },
];
const router = useRouter();
const goreview = () => {
  router.push('Reviewpayments');
};


</script>
<style lang="scss">
.section-2 {
  .title {
    position: relative;
    width: fit-content;
    span {
      position: absolute;
      height: 100%;
      width: 2px;
      inset-inline-start: -5px;
      background-color: #000;
    }
  }
  .num-ui {
    background-color: #65ce00;
    border-radius: 38px;
    padding: 15px 20px;
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
  .btns {
    background-color: #005dba;
  }

}
 @media (max-width:477px) {
  .cards{
    flex-wrap: wrap !important;
  }
  .row{
    flex-direction: column;
    
  }
  .row div{
    margin: 10px 0;
  }
  .sections{
    flex-wrap: wrap;
   
  }
  .head{
    margin: 10px 0;
  }
  .row input{
    width: 250px !important;
  }
  .row label{
    text-wrap: nowrap;
  }
 }
 @media (max-width:799px) {
  .cards{
    flex-wrap: wrap !important;
  }
 }
 @media (max-width:992px) {
  .cards{
    flex-wrap: wrap ;
  }
 }
 @media (max-width:1024px) {
  .cards{
    flex-wrap: wrap ;
  }
 }
</style>
