<template>
  <div class="container dashboard">
    <div class="title">
      <h3>{{ $t("dashboard_pages.dashboard.title.main") }}</h3>
      <p>{{ $t("dashboard_pages.dashboard.title.sub") }}</p>
    </div>
    <div class="patient-form">
      <h2 class="font-bold mb-[30px]">
        {{ $t("dashboard_pages.dashboard.form.title") }}
      </h2>
      <form>
        <div class="toggle-id-mobile">
          <div class="btns rounded-full">
            <div
              v-for="btn in btns"
              :key="btn.id"
              class="btn text-[8px] sm:text-[12px] w-[120px] sm:w-[200px]"
              :class="{ active: isActive(btn.id) }"
              @click="toggleActive(btn.id)"
            >
              {{ $t("dashboard_pages.dashboard.form.btns." + btn.text) }}
            </div>
          </div>
        </div>
        <div
          class="m-auto mt-4 text-center gap-4 w-full bg-white lg:w-3/4 rounded-bl-3xl rounded-br-3xl py-8"
        >
          <div class="form my-8 w-full">
            <form
              action=""
              class="text-center m-auto flex justify-center flex-col items-center px-2"
            >
              <div
                class="relative input sm:w-3/4 flex items-center w-full mb-8"
                style="align-items: center"
              >
                <div class="w-full relative">
                  <label
                    for="subject"
                    class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500 absolute bg-white"
                    >{{
                      searchType == "id"
                        ? $t(
                            "dashboard_pages.dashboard.form.btns." +
                              btns[0].text
                          )
                        : $t(
                            "dashboard_pages.dashboard.form.btns." +
                              btns[1].text
                          )
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
                  <span class="chcked"
                    ><span class="mdi mdi-check"></span
                  ></span>
                </div>
                <div
                  class="text-white select inline rounded-3xl bg-black shadow-sm ms-2 py-4 cursor-pointer relative w-[110px]"
                  @click="showDailogID = true"
                  v-if="activeButton == 1"
                >
                  <div class="id-type text-[12px]">ID Type</div>
                  <svg
                    class="h-5 w-5 text-white absolute right-1 top-[50%] translate-y-[-50%]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="text-white select" v-else>
                  <select
                    id="options"
                    class="inline rounded-3xl bg-green shadow-sm ms-2 py-4 px-6 cursor-pointer"
                  >
                    <option>888</option>
                    <option>889</option>
                    <option>889</option>
                    <option>889</option>
                    <option>889</option>
                    <option>889</option>
                  </select>
                </div>
              </div>
              <div class="relative input sm:w-3/4 w-full mb-6">
                <label
                  for="no-session"
                  class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500 absolute bg-white"
                  >{{ $t("dashboard_pages.dashboard.form.no-sessions.title")
                  }}<span class="text-red-500 ms-1">*</span></label
                >
                <select
                  id="no-session"
                  name="subject"
                  :placeholder="
                    $t('dashboard_pages.dashboard.form.no-sessions.placeholder')
                  "
                  class="appearance-none mt-1 block w-full px-3 py-2 py-4 rounded-[30px] border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">session 01 - 15 Minutes</option>
                  <option value="">session 02 - 15 Minutes</option>
                  <option value="">session 03 - 15 Minutes</option>
                  <option value="">session 04 - 15 Minutes</option>
                </select>
                <svg
                  class="mr-1 h-5 w-5 text-indigo-500 absolute end-4 top-[50%] translate-y-[-50%]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="type-test relative input sm:w-3/4 w-full mb-6">
                <label
                  for="subject"
                  class="block text-sm font-bold text-start ms-3 px-2 pb-3 sm:tex-base text-xs text-blue-500"
                  >{{ $t("dashboard_pages.dashboard.form.test-type.title")
                  }}<span class="text-red-500 ms-1">*</span></label
                >
                <div class="types flex ms-3 px-2">
                  <div class="flex gap-2 items-center mr-[40px] py-2">
                    <input
                      type="radio"
                      id="consultant"
                      name="test"
                      class="custom-checkbox rounded-full h-5 w-5 border-2 border-gray-900 text-blue-600 checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                    <label for="consultant" class="text-md font-bold">{{
                      $t("dashboard_pages.dashboard.form.test-type.consultant")
                    }}</label>
                  </div>
                  <div
                    class="flex items-center gap-2 items-center mr-[40px] py-2"
                  >
                    <input
                      type="radio"
                      id="specialist"
                      name="test"
                      class="custom-checkbox rounded-full h-5 w-5 border-2 border-gray-900 text-blue-600 checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                    <label for="specialist" class="text-md font-bold">
                      {{
                        $t(
                          "dashboard_pages.dashboard.form.test-type.specialist"
                        )
                      }}
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="w-full lg:w-fit rounded-full bg-blue-600 text-white px-5 py-4 cursor-pointer text-center"
              >
                {{ $t("dashboard_pages.dashboard.form.btns.verify-code") }}
              </div>
            </form>
          </div>
        </div>
      </form>
      <div
        class="overlay inset-0 bg-[#00000096] z-10 fixed"
        :class="{ hidden: !showDailogID }"
        @click="showDailogID = false"
      ></div>
      <div
        class="dailog id-types font-bold fixed bg-white rounded-t-[38px] py-[35px] px-[20px] bottom-0 z-20 left-[50%] translate-x-[-50%] w-[330px] sm:w-[590px] md:w-[678px] lg:w-[992px] xl:w-[1024px]"
        :class="{ show: showDailogID }"
      >
        <div class="head flex justify-between items-center text-[12px]">
          <div class="title">
            {{ $t("dashboard_pages.dashboard.form.id-types.title")
            }}<span class="text-red-500 ms-1">*</span>
          </div>
          <div class="close cursor-pointer" @click="showDailogID = false">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="26" height="26" rx="12" fill="black" />
              <path
                d="M16.5187 15.554C16.6362 15.6811 16.6999 15.8487 16.6965 16.0217C16.6932 16.1947 16.623 16.3597 16.5007 16.4821C16.3783 16.6045 16.2134 16.6748 16.0404 16.6783C15.8674 16.6818 15.6997 16.6182 15.5726 16.5008L13.0184 13.9466L10.4643 16.5008C10.4031 16.567 10.3291 16.6202 10.2468 16.6571C10.1646 16.6941 10.0757 16.714 9.9855 16.7158C9.89534 16.7175 9.80575 16.701 9.7221 16.6673C9.63846 16.6336 9.56248 16.5833 9.49874 16.5195C9.43499 16.4558 9.38478 16.3798 9.35113 16.2961C9.31747 16.2124 9.30106 16.1228 9.30287 16.0326C9.30468 15.9425 9.32469 15.8536 9.36169 15.7714C9.39868 15.6891 9.45191 15.6152 9.51817 15.554L12.0723 12.9999L9.51817 10.447C9.45191 10.3858 9.39868 10.3119 9.36169 10.2297C9.32469 10.1474 9.30468 10.0586 9.30287 9.96839C9.30106 9.87822 9.31747 9.78862 9.35113 9.70495C9.38478 9.62128 9.43499 9.54528 9.49874 9.48148C9.56248 9.41769 9.63846 9.36743 9.7221 9.33372C9.80575 9.3 9.89534 9.28353 9.9855 9.28528C10.0757 9.28704 10.1646 9.30698 10.2468 9.34392C10.3291 9.38086 10.4031 9.43403 10.4643 9.50026L13.0184 12.0538L15.5726 9.49961C15.6997 9.38222 15.8674 9.31861 16.0404 9.32209C16.2134 9.32557 16.3783 9.39588 16.5007 9.51829C16.623 9.64069 16.6932 9.80568 16.6965 9.97869C16.6999 10.1517 16.6362 10.3193 16.5187 10.4464L13.9645 12.9999L16.5187 15.554Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="options text-start">
          <div
            class="option active flex justify-between bg-[#f8f8f8] px-4 py-5 mb-2 rounded-[10px] cursor-pointer text-[14px]"
          >
            <div class="type">
              {{ $t("dashboard_pages.dashboard.form.id-types.type-1") }}
            </div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="20" height="20" rx="10" fill="#005DBA" />
              <path
                d="M6.875 11.7915L8.42937 12.9572C8.63547 13.1118 8.92679 13.0765 9.08993 12.8771L13.125 7.94531"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div
            class="option flex justify-between bg-[#f8f8f8] px-4 py-5 mb-2 rounded-[10px] cursor-pointer text-[14px]"
          >
            <div class="type">
              {{ $t("dashboard_pages.dashboard.form.id-types.type-2") }}
            </div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="20" height="20" rx="10" fill="#005DBA" />
              <path
                d="M6.875 11.7915L8.42937 12.9572C8.63547 13.1118 8.92679 13.0765 9.08993 12.8771L13.125 7.94531"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div
            class="option flex justify-between bg-[#f8f8f8] px-4 py-5 mb-2 rounded-[10px] cursor-pointer text-[14px]"
          >
            <div class="type">
              {{ $t("dashboard_pages.dashboard.form.id-types.type-3") }}
            </div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="20" height="20" rx="10" fill="#005DBA" />
              <path
                d="M6.875 11.7915L8.42937 12.9572C8.63547 13.1118 8.92679 13.0765 9.08993 12.8771L13.125 7.94531"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div
            class="option flex justify-between bg-[#f8f8f8] px-4 py-5 mb-5 rounded-[10px] cursor-pointer text-[14px]"
          >
            <div class="type">
              {{ $t("dashboard_pages.dashboard.form.id-types.type-4") }}
            </div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="20" height="20" rx="10" fill="#005DBA" />
              <path
                d="M6.875 11.7915L8.42937 12.9572C8.63547 13.1118 8.92679 13.0765 9.08993 12.8771L13.125 7.94531"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div
          class="ensure w-full bg-[#005DBA] py-5 px-4 text-white rounded-[38px] cursor-pointer text-[12px]"
        >
          تــأكيد
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
let showDailogID = ref(false);
let activeButton = ref(1);
let searchType = ref("id");
let btns = ref([
  { id: 1, text: "search-by-id" },
  { id: 2, text: "search-by-mobile" },
]);
const toggleActive = (id) => {
  activeButton.value = id;
  searchType.value = 1 == id ? "id" : "mobile";
};
const isActive = (id) => activeButton.value === id;
onMounted(() => {
  let IDTypes = document.querySelectorAll(".dailog .option");
  IDTypes.forEach((e) => {
    e.addEventListener("click", () => {
      IDTypes.forEach((e) => {
        e.classList.remove("active");
      });
      e.classList.add("active");
    });
  });
});
</script>
<style lang="scss">
input,
select {
  &:focus {
    outline: none;
  }
}
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  gap: 10px;
  .title {
    padding: 35px 10px;
    background-color: #fff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    h3 {
      font-size: 14px;
      font-weight: bold;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      color: #8a8a8a;
    }
  }
  .patient-form {
    background-color: #fff;
    padding: 30px 10px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    .toggle-id-mobile {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      .btns {
        display: flex;
        gap: 5px;
        background: #f8f8f8;
        padding: 5px;
        .btn {
          padding: 13px 10px;
          cursor: pointer;
          // width: 200px;
          border-radius: 9999px;
          color: gray;
          font-size: 12px;
          &.active {
            background: #005dba;
            color: #fff;
          }
        }
      }
    }
    .patient {
      .check-correct {
        display: grid;
        place-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #65ce00;
        padding: 5px;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
.chcked {
  position: absolute;
  inset-inline-end: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #5a5a5a;
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-checkbox {
  appearance: none;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.custom-checkbox:checked {
  background-color: #2563eb;
  border-color: #2563eb;
}

.custom-checkbox:checked::before {
  content: "✓";
  color: white;
  font-size: 0.75rem;
}
.dailog {
  transition: 0.5s;
  bottom: -200% !important;
  &.show {
    bottom: 0 !important;
  }
  .options {
    .option {
      svg {
        display: none;
      }
      &.active {
        .type {
          color: #2563eb;
        }
        svg {
          display: block;
        }
      }
    }
  }
}
</style>
