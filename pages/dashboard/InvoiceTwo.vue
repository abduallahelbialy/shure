<template>
  <div class="flex justify-between gap-2 inov">
    <div class="flex flex-col gap-3 box">
      <div class="bg-white rounded-[36px] rounded-b-[0] py-4 px-3">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div
              class="cirk flex justify-center items-center w-[40px] h-[40px] rounded-[50%]"
            >
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.58203 8.83333L4.5457 11.0561C4.93866 11.3508 5.49411 11.2834 5.80516 10.9033L13.4987 1.5"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="text font-bold text-[11px]">
              <p>| {{ $t("dashboard_pages.payments.cards.Invoice") }}</p>
            </div>
          </div>
          <div class="font-bold text-[11px]">#145569</div>
        </div>
        <div class="flex flex-col gap-3 mt-10 py-3 text-[11px]">
          <div class="font-bold">
            {{ $t("dashboard_pages.payments.cards.KhaledAl-Anazi") }}
          </div>
          <div class="font-bold">+966 475 888 966</div>
          <div class="font-bold">
            {{ $t("dashboard_pages.payments.cards.address") }}
          </div>
          <div class="flex justify-between items-center">
            <div class="font-bold">
              {{ $t("dashboard_pages.payments.cards.addresss") }}
            </div>
            <div class="font-bold flex-grow-1 modi rounded-[36px] p-[10px]">
              {{ $t("dashboard_pages.payments.cards.Modifyinformation") }}
            </div>
          </div>
        </div>
      </div>
      <!-- ///boxtwo//// -->
      <div class="bg-white rounded-[4px] py-4 px-3 flex-grow-1">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div class="flex gap-3 items-center">
              <div
                class="p-[10px] w-[40px] h-[40px] bg-black text-white rounded-[18px] text-center font-bold"
              >
                <p>02</p>
              </div>
              <p class="font-bold text-[14px]">
                {{ $t("dashboard_pages.dashboard.form.btns.Step") }}
              </p>
            </div>
          </div>
          <svg
            width="37"
            height="13"
            viewBox="0 0 37 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0703 12.3728L14.9416 0.248047H17.9347L16.062 12.3728H13.0703Z"
              fill="#0E4595"
            />
            <path
              d="M26.8758 0.509237C26.2828 0.263599 25.3536 0 24.1932 0C21.2357 0 19.1524 1.64446 19.1347 4.0013C19.118 5.7435 20.6219 6.7154 21.7573 7.29536C22.9224 7.88976 23.314 8.26875 23.3084 8.79935C23.3009 9.61214 22.378 9.98332 21.5177 9.98332C20.3198 9.98332 19.6833 9.79955 18.7003 9.34699L18.3146 9.15424L17.8945 11.8685C18.5936 12.207 19.8863 12.5001 21.2287 12.5154C24.375 12.5154 26.4175 10.8897 26.4407 8.37286C26.4519 6.99355 25.6545 5.94398 23.9276 5.07862C22.8815 4.51773 22.2408 4.14345 22.2475 3.5755C22.2475 3.07152 22.7899 2.53262 23.9617 2.53262C24.9404 2.51584 25.6495 2.7515 26.2019 2.99714L26.4701 3.13705L26.8758 0.509237Z"
              fill="#0E4595"
            />
            <path
              d="M34.5791 0.248047H32.2664C31.5499 0.248047 31.0137 0.463955 30.699 1.25351L26.2539 12.3649H29.3969C29.3969 12.3649 29.9107 10.871 30.027 10.5429C30.3704 10.5429 33.4237 10.5481 33.8602 10.5481C33.9497 10.9726 34.2244 12.3649 34.2244 12.3649H37.0017L34.5791 0.248047ZM30.9096 8.07724C31.1572 7.37866 32.1022 4.68786 32.1022 4.68786C32.0846 4.72013 32.3479 3.98588 32.499 3.53065L32.7013 4.576C32.7013 4.576 33.2744 7.4702 33.3942 8.07705H30.9096V8.07724Z"
              fill="#0E4595"
            />
            <path
              d="M0.038236 0.248047L0 0.500266C1.18319 0.816511 2.23995 1.27423 3.16515 1.84362L5.82097 12.3534L8.98777 12.3495L13.6999 0.248047H10.5292L7.59889 8.51624L7.28676 6.83587C7.27213 6.78395 7.25624 6.73195 7.23998 6.67982L6.2213 1.27168C6.04017 0.503925 5.51471 0.274803 4.86463 0.248047H0.038236Z"
              fill="#0E4595"
            />
          </svg>
        </div>
        <div class="inpus mt-3 py-10">
          <div class="w-[48%] relative m-auto mb-6 sss">
            <label
              for="subject"
              class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
              >{{ $t("dashboard_pages.dashboard.form.btns.Cardholder")
              }}<span class="text-red-500 ms-1">*</span></label
            ><input
              type="number"
              placeholder="05 45 75 85 96
               
              "
              id="subjecta"
              name="subject"
              class="mt-1 block w-full px-3 py-5 rounded-[12px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="w-[48%] relative m-auto mt-3 sss">
            <label
              for="subject"
              class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
              >{{ $t("dashboard_pages.dashboard.form.btns.Cardholdert")
              }}<span class="text-red-500 ms-1">*</span></label
            ><input
              type="number"
              placeholder="0000  0000  0000  0000
              "
              id="subjects"
              name="subject"
              class="mt-1 block w-full px-3 py-5 rounded-[12px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="flex gap-3 justify-center exp">
            <div class="w-[22%] relative mt-3">
              <label
                for="subject"
                class="block text-sm text-nowrap font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                >{{ $t("dashboard_pages.dashboard.form.btns.Expiry")
                }}<span class="text-red-500 ms-1">*</span></label
              ><input
                type="text"
                placeholder="YY / MM
              "
                id="subjectss"
                name="subject"
                class="mt-1 block w-full px-3 py-5 rounded-[12px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="w-[22%] relative mt-3">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
              >
                CVV/CVC
                <span class="text-red-500 ms-1">*</span></label
              ><input
                type="text"
                placeholder="CVV/CVC
              "
                id="subjectsss"
                name="subject"
                class="mt-1 block w-full px-3 py-5 rounded-[12px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div class="check flex justify-center gap-1 mt-3 items-center">
            <input type="checkbox" name="s" id="chev" checked />
            <p class="text-[10px]">
              {{ $t("dashboard_pages.payments.cards.Savepayment") }}
            </p>
          </div>
          <button
            class="continue-button mb-6 mt-6 w-[335px] h-[57px] p-[10px] m-auto justify-center text-white border-none rounded-[16px] font-bold flex items-center text-[12px]"
          >
            {{ $t("dashboard_pages.payments.cards.Paymentss") }}
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
    <div class="section-1 text-[12px] w-[600px] me-6">
      <div class="summary font-bold rounded-t-[38px] bg-white py-10 px-9">
        <div class="title mb-5">
          {{ $t("dashboard_pages.payments.summary.summary") }}
        </div>
        <div class="flex justify-between">
          <div class="text-[#5a5a5a] font-semibold text-[10px]">
            {{ $t("dashboard_pages.payments.cards.card-4") }}
          </div>
          <div class="text-[#005dba]">
            2000 {{ $t("dashboard_pages.payments.cards.currency") }}
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <div class="text-[#5a5a5a] font-semibold text-[9px]">
            {{ $t("dashboard_pages.payments.cards.card-5") }}
          </div>
          <div class="text-[#005dba]">10</div>
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
        <div class="font-bold text-[10px]">
          {{ $t("dashboard_pages.payments.summary.warning") }}
        </div>
      </div>
      <div class="payment bg-white py-10 px-9 mb-3">
        <div class="font-bold mb-4">
          {{ $t("dashboard_pages.payments.summary.payment") }}
        </div>
        <div class="font-bold mb-6">
          {{ $t("dashboard_pages.payments.summary.amounts-duee") }}
        </div>
        <div class="text-[#5a5a5a]">
          <div class="flex justify-between mb-6 font-bold">
            <div class="text-[10px]">
              {{ $t("dashboard_pages.payments.cards.Financial") }}
            </div>
            <div class="text-[#005dba]">
              2000 {{ $t("dashboard_pages.payments.cards.currency") }}
            </div>
          </div>
          <div class="flex justify-between mb-6 font-bold">
            <div class="text-[10px]">
              {{ $t("dashboard_pages.payments.cards.card-22") }}
            </div>
            <div class="text-[#005dba]">10</div>
          </div>
          <div class="flex justify-between mb-6 font-bold">
            <div class="text-[10px]">
              {{ $t("dashboard_pages.payments.cards.Number") }}
            </div>
            <div class="text-[#005dba]">
              150 {{ $t("dashboard_pages.payments.cards.min") }}
            </div>
          </div>
          <div class="flex justify-between font-bold mb-6">
            <div class="text-[10px]">
              {{ $t("dashboard_pages.payments.cards.card-3") }}
            </div>
            <div class="text-[#005dba]">
              150 {{ $t("dashboard_pages.payments.cards.min") }}
            </div>
          </div>
          <div class="flex justify-between font-bold">
            <div class="text-[10px]">
              {{ $t("dashboard_pages.payments.cards.Nsessions") }}
            </div>
            <div class="text-[#005dba]">
              300 {{ $t("dashboard_pages.payments.cards.currency") }}
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
          <div class="text-[#005dba] text-[10px] font-blod">
            2300 {{ $t("dashboard_pages.payments.cards.currency") }}
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
</script>

<style scoped>
.cirk {
  background: #65ce00;
}
.check input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}

.check input[type="checkbox"]:checked {
  border-color: #4caf50;
  background-color: #4caf50;
}

.check input[type="checkbox"]:checked::after {
  content: "✔";
  color: white;
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 2px;
}

.modi {
  background: #005dba1a;
  color: #005dba;
}
.box {
  width: 88%;
}

.continue-button {
  background-color: #0066cc;
}

.continue-button .arrow {
  margin-left: 10px;
}
@media (max-width: 477px) {
  .inov {
    flex-wrap: wrap;
  }
  .las {
    font-size: 10px;
  }
  .box {
    width: 98%;
  }
  .continue-button {
    width: 250px !important;
  }
  .exp {
    flex-direction: column;
  }
  .exp input {
    width: 220px !important;
  }
  .sss input {
    width: 190px !important;
  }
}
@media (max-width: 799px) {
  .exp {
    flex-direction: column;
  }
  .exp input {
    width: 300px;
  }
}
@media (max-width: 992px) {
  .exp {
    flex-direction: column;
  }
  .exp input {
    width: 300px;
  }
}
@media (max-width: 1024px) {
  .exp {
    flex-direction: column;
  }
  .exp input {
    width: 300px;
  }
}
</style>
