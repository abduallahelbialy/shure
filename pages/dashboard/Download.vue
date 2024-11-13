<template>
  <div class="Download">
    <div class="flex justify-end cursor-pointer" @click="goinvice">
      <div
        class="p-[10px] w-[40px] h-[40px] bg-black text-white rounded-[18px] text-center font-bold flex justify-center items-center"
      >
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.753262 0.246034C1.07868 -0.0794073 1.60626 -0.0794073 1.93176 0.246034L6.00461 4.32289C6.65494 4.97389 6.65468 6.02872 6.00404 6.6793L1.92876 10.7546C1.60326 11.0801 1.07568 11.0801 0.750178 10.7546C0.424762 10.4292 0.424762 9.90155 0.750178 9.57613L4.23826 6.08805C4.5637 5.76263 4.5637 5.23505 4.23826 4.90955L0.753262 1.42454C0.427762 1.09911 0.427762 0.571468 0.753262 0.246034Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <!-- Modal -->
    <div class="flex items-center justify-center bg-opacity-65 modalbac mb-5">
      <div class="bg-white modal-content mx-auto p-8 rounded-lg shadow-2xl">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-4 titl">
          <svg
            width="99"
            height="49"
            viewBox="0 0 99 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5066 36.1994C32.5066 37.5823 31.9495 38.1804 30.8477 38.1804V38.9652C32.5887 38.8719 33.3361 37.9574 33.3361 36.0455V31.7188H32.5066V36.1994Z"
              fill="#262626"
            />
            <path
              d="M66.2675 29.8809H65.4258V30.8783H66.2675V29.8809Z"
              fill="#262626"
            />
            <path
              d="M64.7167 29.8809H63.875V30.8783H64.7167V29.8809Z"
              fill="#262626"
            />
            <path
              d="M67.8424 31.7211V34.6183C67.8424 35.8612 67.5455 36.2242 66.6584 36.2242H65.237C65.3907 35.9078 65.4623 35.4861 65.4623 34.9813V31.7211H64.6328V34.6183C64.6328 35.8612 64.3848 36.2242 63.6252 36.2242H62.0728V36.1775C62.2038 35.8612 62.2736 35.4619 62.2736 34.9813V31.7211H61.4441V34.7237C61.3603 35.7212 60.9465 36.2242 60.1886 36.2242H59.3469H59.0867H57.0017H56.848H54.6565H54.5028H52.3113H52.1576H49.9661H49.8124H47.6208H47.4672H45.2756H45.122H42.9304H42.7768H40.4315V36.2363H39.0922V34.0547C39.0922 32.5076 38.2749 31.709 36.96 31.709C36.2842 31.709 35.7167 31.9666 35.2539 32.4834C34.8034 32.9985 34.5781 33.633 34.5781 34.3953C34.5781 35.1576 34.7912 35.7903 35.2172 36.2951C35.6433 36.7998 36.1882 37.0453 36.8517 37.0453H38.1422C37.9414 37.7955 37.4559 38.1827 36.6963 38.1827H36.5898V38.9675C37.9519 38.8863 38.7569 38.2519 38.9944 37.0453H40.4281H40.6289H42.7733H42.9269H45.1185H45.2721H47.4637H47.6174H49.8089H49.9626H52.1541H52.3078H54.4993H54.653H56.8445H56.9982H59.0832H59.3434H66.9239C68.0973 37.0453 68.6771 36.3538 68.6771 34.9813V31.7211H67.8424ZM38.24 36.2225L36.8657 36.2346C36.403 36.2346 36.0362 36.0116 35.7638 35.5656C35.5386 35.2026 35.432 34.779 35.432 34.3106C35.432 33.8646 35.563 33.4549 35.811 33.0919C36.0956 32.6805 36.4623 32.4696 36.9129 32.4696C37.3512 32.4696 37.683 32.6096 37.9204 32.8793C38.1335 33.1144 38.24 33.4065 38.24 33.747V36.2225Z"
              fill="#262626"
            />
            <path
              d="M65.4745 28.5781H64.6328V29.5756H65.4745V28.5781Z"
              fill="#262626"
            />
            <path
              d="M61.7863 28.8812C61.9993 28.8812 62.146 28.8103 62.2281 28.6703C62.2211 29.0886 62.0447 29.296 61.7007 29.296V29.545C62.2508 29.5156 62.49 29.2269 62.49 28.6219V28.0704C62.49 27.5881 62.1949 27.2441 61.7863 27.2441C61.3602 27.2441 61.0703 27.5847 61.0703 28.0601C61.0721 28.5406 61.3742 28.8812 61.7863 28.8812ZM61.7723 27.4723C62.05 27.4723 62.2368 27.7351 62.2368 28.0687C62.2368 28.3902 62.0639 28.6461 61.7915 28.6461C61.5191 28.6461 61.3305 28.3902 61.3305 28.0531C61.3305 27.7316 61.4981 27.4723 61.7723 27.4723Z"
              fill="#262626"
            />
            <path
              d="M34.0101 43.6995C33.7709 43.5958 33.4566 43.4904 33.0636 43.3832C32.7406 43.2933 32.4891 43.2138 32.3093 43.1429C32.1294 43.072 31.9792 42.97 31.857 42.8352C31.7347 42.7004 31.6736 42.5258 31.6736 42.3114C31.6736 42.0141 31.7749 41.7807 31.981 41.6148C32.1853 41.4488 32.449 41.3659 32.7738 41.3659C33.1195 41.3659 33.3989 41.4523 33.6085 41.6234C33.818 41.7946 33.9385 41.9934 33.9665 42.2181H34.8186C34.7732 41.7635 34.5724 41.397 34.2179 41.1221C33.8634 40.8473 33.4077 40.709 32.8506 40.709C32.4647 40.709 32.1224 40.7764 31.8238 40.9112C31.5252 41.0461 31.2947 41.2379 31.1288 41.4851C30.9629 41.7323 30.8826 42.0158 30.8826 42.3374C30.8826 42.7038 30.9664 42.9942 31.134 43.2103C31.3017 43.4264 31.5025 43.5854 31.74 43.6874C31.9757 43.7894 32.2901 43.8897 32.6812 43.9917C32.999 44.0764 33.2522 44.1542 33.4391 44.2285C33.6259 44.3011 33.7831 44.4083 33.9071 44.5483C34.0311 44.6883 34.0939 44.8715 34.0939 45.0963C34.0939 45.3832 33.9874 45.6183 33.7744 45.7998C33.5613 45.9831 33.2697 46.0747 32.9012 46.0747C32.5153 46.0747 32.2202 45.9813 32.0194 45.7929C31.8168 45.6045 31.7033 45.3729 31.6736 45.0963H30.8477C30.8529 45.4161 30.9437 45.6996 31.1201 45.9433C31.2964 46.187 31.5392 46.3789 31.8483 46.5172C32.1573 46.6555 32.5083 46.7246 32.9012 46.7246C33.3099 46.7246 33.6661 46.6469 33.9665 46.4878C34.2668 46.3305 34.4956 46.1248 34.6475 45.8724C34.8012 45.62 34.878 45.3487 34.878 45.0634C34.878 44.6918 34.7924 44.3979 34.623 44.1818C34.4537 43.964 34.2493 43.8032 34.0101 43.6995Z"
              fill="#262626"
            />
            <path
              d="M42.874 42.1797C42.5894 42.031 42.2716 41.9567 41.9206 41.9567C41.5853 41.9567 41.2832 42.0206 41.0125 42.1503C40.7419 42.2799 40.5306 42.4632 40.3769 42.6983V40.4199H39.6016V46.662H40.3769V44.1054C40.3769 43.6214 40.4974 43.2532 40.7384 43.0008C40.9794 42.7484 41.3059 42.6205 41.7145 42.6205C42.1179 42.6205 42.4357 42.7432 42.6697 42.9869C42.902 43.2324 43.019 43.5851 43.019 44.0449V46.6603H43.7856V43.936C43.7856 43.509 43.7052 43.146 43.5428 42.8487C43.3822 42.5531 43.1587 42.3301 42.874 42.1797Z"
              fill="#262626"
            />
            <path
              d="M52.0007 44.5799C52.0007 45.064 51.8819 45.4322 51.6427 45.6845C51.4035 45.9369 51.0769 46.0648 50.6631 46.0648C50.2597 46.0648 49.9419 45.9421 49.7096 45.6984C49.4756 45.4546 49.3604 45.1037 49.3604 44.6474V42.0406H48.5938V44.7476C48.5938 45.1746 48.6776 45.5376 48.8452 45.8349C49.0128 46.1323 49.2416 46.357 49.5315 46.5056C49.8214 46.6543 50.1479 46.7286 50.5111 46.7286C50.8289 46.7286 51.1206 46.6629 51.3843 46.5298C51.6479 46.3985 51.854 46.2135 52.0024 45.9767V46.6595H52.7778V42.0371H52.0024V44.5799H52.0007Z"
              fill="#262626"
            />
            <path
              d="M58.4433 42.792V42.0417H57.668V46.6641H58.4433V44.1507C58.4433 43.2172 58.8781 42.7505 59.7477 42.7505H59.9521V41.957C59.5888 41.957 59.2798 42.0296 59.0265 42.1766C58.7733 42.3235 58.5795 42.5275 58.4433 42.792Z"
              fill="#262626"
            />
            <path
              d="M68.6835 44.176C68.6835 43.7542 68.591 43.3756 68.4059 43.042C68.2208 42.7084 67.9588 42.4439 67.6183 42.2538C67.2778 42.0619 66.8849 41.9668 66.4431 41.9668C65.9891 41.9668 65.5874 42.0636 65.2364 42.2572C64.8872 42.4508 64.6165 42.7274 64.4227 43.0887C64.2289 43.4482 64.1328 43.8683 64.1328 44.3454C64.1328 44.8242 64.2324 45.2443 64.4314 45.6073C64.6305 45.9703 64.9047 46.2504 65.2539 46.4474C65.6032 46.6445 65.9996 46.743 66.4431 46.743C67.0002 46.743 67.4664 46.6047 67.8401 46.3264C68.2155 46.0481 68.4653 45.6868 68.5892 45.2426H67.7545C67.6637 45.5019 67.5066 45.7076 67.2813 45.8632C67.056 46.0187 66.7766 46.0948 66.4414 46.0948C66.0327 46.0948 65.6835 45.9669 65.3971 45.711C65.1107 45.4552 64.9535 45.0991 64.9239 44.6445H68.6556C68.6748 44.4768 68.6835 44.3212 68.6835 44.176ZM64.9326 44.0152C64.9728 43.5762 65.1299 43.2339 65.4058 42.9867C65.6817 42.7395 66.0153 42.615 66.4064 42.615C66.6788 42.615 66.9268 42.6704 67.1521 42.7793C67.3756 42.8899 67.5537 43.0489 67.6847 43.2598C67.8156 43.4707 67.8803 43.7231 67.8803 44.0152H64.9326Z"
              fill="#262626"
            />
            <path
              d="M39.9991 25.2852C39.8716 25.2109 39.7581 25.121 39.6568 25.0121C39.8437 25.2368 40.0288 25.4615 40.2156 25.6862C40.1702 25.6309 40.1248 25.5739 40.0794 25.5186C41.1272 26.8583 42.1749 28.1962 43.2227 29.5359C41.803 27.2092 44.8694 25.5168 46.6052 24.7148C48.7775 23.7104 51.1227 23.1296 53.4749 22.7078C58.2491 21.8504 63.2294 21.6568 67.7801 19.8607C69.2033 19.2989 73.4572 17.6844 71.9973 15.5841C71.2884 14.5642 70.4641 13.6065 69.6923 12.635C69.1946 12.0075 68.7004 11.0723 67.9652 10.6782C66.921 10.1216 65.2463 10.4016 64.1165 10.4483C58.0291 10.692 52.0063 12.03 45.987 12.8736C42.6586 13.3403 39.3233 13.7569 35.9827 14.1234C34.2574 14.3135 32.5286 14.4899 30.7999 14.6523C29.6665 14.7595 27.8871 15.2505 26.9494 14.374C28.163 15.9073 29.3767 17.4424 30.5921 18.9757C29.2894 17.2004 33.3791 15.5236 34.4705 14.9894C36.456 14.0197 38.548 13.2919 40.7011 12.782C40.5404 12.82 39.0456 10.635 38.8745 10.4189C38.438 9.86574 38.0014 9.31431 37.5596 8.76633C37.4915 8.68163 37.0724 8.07487 37.0008 8.09216C35.1899 8.52086 33.4245 9.10168 31.7254 9.85537C30.9465 10.2011 30.1817 10.5814 29.436 10.9928C28.6625 11.4215 27.7038 11.864 27.1223 12.5486C26.6473 13.1069 26.5478 13.7656 26.9494 14.3792C27.9517 15.9125 29.2178 17.3421 30.3878 18.7527C31.446 20.0301 33.3861 19.4493 34.8389 19.311C42.9869 18.5349 51.0738 17.3853 59.1554 16.1113C61.4203 15.7535 63.6939 15.4268 65.9815 15.247C67.0939 15.1606 68.2097 15.107 69.3273 15.1035C70.2214 15.1001 71.2953 14.9946 72.0148 15.6204C71.0788 14.4501 70.1446 13.2781 69.2086 12.1078C69.254 12.1648 69.2976 12.2219 69.343 12.2789C69.0444 11.8865 68.7458 11.4941 68.4472 11.1017C69.0759 12.4293 67.6631 13.3265 66.6765 13.909C65.5834 14.5538 64.4186 15.0707 63.2189 15.4873C60.7794 16.3343 58.2177 16.7665 55.6682 17.1364C50.7106 17.8555 45.0492 18.2358 40.8111 21.178C39.7616 21.9057 38.7994 23.1279 39.3198 24.4624C39.4508 24.7977 39.6883 25.076 39.9048 25.3595C40.4601 26.0856 41.0276 26.8029 41.5952 27.5203C42.2238 28.3155 42.8455 29.3907 43.7011 29.975C43.5457 29.8678 43.2524 29.3752 43.1755 29.2749C42.7459 28.7183 42.3094 28.1634 41.8728 27.612C41.4363 27.0588 40.9997 26.5073 40.5579 25.9594C40.3937 25.7554 40.2139 25.4321 39.9991 25.2852Z"
              fill="#262626"
            />
            <path
              d="M61.8467 2.63046C60.1144 0.818842 58.7366 6.29171 57.0742 5.24243C57.2209 5.33578 57.537 5.86128 57.5998 5.94253C58.0294 6.49915 58.466 7.05404 58.9025 7.60548C59.3391 8.15864 59.7757 8.71008 60.2175 9.25806C60.3764 9.45512 60.5632 9.79739 60.7763 9.93223C62.4404 10.9832 63.813 5.50518 65.5488 7.32025C64.1814 5.88894 63.221 4.06695 61.8467 2.63046Z"
              fill="#262626"
            />
            <path
              d="M53.8936 2.63046C52.1613 0.818842 50.7835 6.29171 49.1211 5.24243C49.2678 5.33578 49.5839 5.86128 49.6467 5.94253C50.0763 6.49915 50.5129 7.05404 50.9494 7.60548C51.386 8.15864 51.8225 8.71008 52.2643 9.25806C52.4232 9.45512 52.6101 9.79739 52.8231 9.93223C54.4873 10.9832 55.8599 5.50518 57.5956 7.32025C56.2283 5.88894 55.2679 4.06695 53.8936 2.63046Z"
              fill="#262626"
            />
            <path
              d="M46.0264 2.63046C44.2941 0.818842 42.9163 6.29171 41.2539 5.24243C41.4006 5.33578 41.7167 5.86128 41.7795 5.94253C42.2091 6.49915 42.6457 7.05404 43.0822 7.60548C43.5188 8.15864 43.9554 8.71008 44.3972 9.25806C44.5561 9.45512 44.7429 9.79739 44.956 9.93223C46.6201 10.9832 47.9927 5.50518 49.7284 7.32025C48.3611 5.88894 47.399 4.06695 46.0264 2.63046Z"
              fill="#262626"
            />
          </svg>
          <div class="flex flex-col gap-2 ssa">
            <h3 class="font-semibold text-[15px]">  {{ $t("dashboard_pages.payments.cards.Simplified") }}</h3>
            <h3 class="text-start font-semibold text-[15px]">{{ $t("dashboard_pages.payments.cards.Taxinvoice") }}</h3>
          </div>
          
        </div>
        <div class="border-t border-gray-300 my-4"></div>

        <!-- Invoice Content -->
        <div class="text-sm">
          <div class="flex justify-between items-center tt">
            <div
              class="flex flex-col gap-3 flex-grow-1 text-nowrap text-[10px] pp"
            >
              <div class="font-medium">{{ $t("dashboard_pages.payments.cards.NationalCompany") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.NationalCompany") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.RiyadhPearlStreet") }}</div>
                        <div class="font-medium">
                          {{ $t("dashboard_pages.payments.cards.MinistryofHealth") }}
                        </div>
              <div class="font-medium"></div>
              <div class="font-medium">{{ $t("dashboard_pages.payments.cards.Taxg") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.Taxregistration") }}</div>
                        <div class="font-medium">12313212800001</div>
            </div>
            <div
              class="flex flex-col gap-3 flex-grow-1 text-nowrap text-[10px] pp"
            >
               <div class="font-medium">{{ $t("dashboard_pages.payments.cards.Invoices") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.Invoices") }}</div>
                        <div class="font-medium">359</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.Date") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.DateSeptember") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.DueDate") }}</div>
                        <div class="font-medium">
                         {{ $t("dashboard_pages.payments.cards.DateSeptember") }}
                        </div>
                        <div class="font-medium"></div>
            </div>
            <div
              class="flex flex-col gap-3 text-[10px] text-nowrap flex-grow-1 pp"
            >
             <div class="font-medium">{{ $t("dashboard_pages.payments.cards.Billto") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.Customer") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.AbdullahTrading") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.AbdullahAhmed") }}</div>
                        <div class="font-medium">{{ $t("dashboard_pages.payments.cards.DateSeptember") }}</div>
                        <div class="font-medium"></div>
                        <div class="font-medium">TRN 10164341254378229</div>
                        <div class="font-medium"></div>
            </div>
          </div>
          <div class="Payment">
            <h1 class="mt-[30px] font-bold">{{ $t("dashboard_pages.payments.cards.Payment") }}</h1>
          </div>
          <div class="Amounts">
            <h1 class="mt-3 mb-[45px] font-bold"> {{ $t("dashboard_pages.payments.summary.amounts-duee") }}</h1>
          </div>
          <div class="Total flex justify-between items-center text-[10px]">
            <span>{{ $t("dashboard_pages.payments.cards.card-4") }}</span>
                      <span>300 {{ $t("dashboard_pages.payments.cards.currency") }}</span>
          </div>
          <div
            class="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center"
          ></div>
          <div class="Total flex justify-between items-center text-[10px]">
             <span>{{ $t("dashboard_pages.payments.cards.Numbers") }}</span>
                      <span>01</span>
          </div>
          <div
            class="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center"
          ></div>
          <div class="Total flex justify-between items-center text-[10px]">
           <span>{{ $t("dashboard_pages.payments.cards.Nsessionsa") }}</span>
                      <span>01</span>
          </div>
          <div
            class="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center"
          ></div>
          <div class="Total flex justify-between items-center text-[10px]">
           <span>{{ $t("dashboard_pages.payments.cards.card-3") }}</span>
                      <span>45 {{ $t("dashboard_pages.payments.cards.currency") }} </span>
          </div>
          <div class="pQ flex justify-end self-end">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1510_6854)">
                <path
                  d="M8 24H24V8H8V24ZM10.6667 10.6667H21.3333V21.3333H10.6667V10.6667ZM13.3333 13.3333H18.6667V18.6667H13.3333V13.3333ZM40 24H56V8H40V24ZM42.6667 10.6667H53.3333V21.3333H42.6667V10.6667ZM45.3333 13.3333H50.6667V18.6667H45.3333V13.3333ZM8 56H24V40H8V56ZM10.6667 42.6667H21.3333V53.3333H10.6667V42.6667ZM13.3333 45.3333H18.6667V50.6667H13.3333V45.3333ZM53.3333 50.6667H56V56H50.6667V48H53.3333V50.6667ZM53.3333 42.6667H56V45.3333H53.3333V42.6667ZM53.3333 40V42.6667H50.6667V40H53.3333ZM26.6667 45.3333H29.3333V56H26.6667V45.3333ZM16 26.6667V32H10.6667V29.3333H8V26.6667H16ZM26.6667 18.6667H29.3333V21.3333H26.6667V18.6667ZM34.6667 10.6667V16H32V8H37.3333V10.6667H34.6667ZM26.6667 10.6667H29.3333V13.3333H26.6667V10.6667ZM53.3333 32H56V37.3333H50.6667V34.6667H53.3333V32ZM50.6667 26.6667V29.3333H45.3333V34.6667H40V32H42.6667V26.6667H50.6667ZM32 37.3333H29.3333V34.6667H26.6667V32H32V37.3333ZM48 42.6667H50.6667V45.3333H48V42.6667ZM53.3333 29.3333V32H50.6667V29.3333H53.3333ZM29.3333 37.3333V40H26.6667V37.3333H29.3333ZM45.3333 50.6667H48V56H42.6667V50.6667H45.3333ZM37.3333 50.6667H40V53.3333H37.3333V56H32V53.3333H34.6667V50.6667H37.3333ZM37.3333 48V45.3333H42.6667V48H37.3333ZM37.3333 34.6667H40V42.6667H37.3333V45.3333H34.6667V48H32V42.6667H29.3333V40H37.3333V37.3333H34.6667V34.6667H37.3333ZM13.3333 34.6667V37.3333H10.6667V34.6667H13.3333ZM45.3333 45.3333H42.6667V42.6667H45.3333V45.3333ZM48 40H42.6667V37.3333H48V40ZM21.3333 26.6667H24V29.3333H21.3333V32H24V37.3333H21.3333V34.6667H18.6667V37.3333H16V32H18.6667V26.6667H21.3333ZM29.3333 26.6667V21.3333H37.3333V29.3333H32V26.6667H34.6667V24H32V26.6667H29.3333ZM29.3333 16H32V18.6667H29.3333V16ZM26.6667 26.6667H29.3333V29.3333H26.6667V26.6667ZM34.6667 18.6667V16H37.3333V18.6667H34.6667Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1510_6854">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex flex-col text-[8px]">
               <span>{{ $t("dashboard_pages.payments.cards.Taxnumber") }}</span>
                        <span>12313212800001</span>
            </div>
            <div class="flex flex-col text-[8px] text-end">
              <span
                >This GR code is encoded as per ZATCA e-invoicing
                requirements</span
              >
              <span
                >QR code encrypted according to requirements Zakat Arab and
                Customs Authority<br />
                for electronic invoicing</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="btn-dow w-[222px] h-[55px] rounded-[36px] p-[10px] font-semibold text-white m-auto mt-4 flex items-center justify-center"
    >
      <button class="flex items-center gap-2" @click="printModalContent">
        {{ $t("dashboard_pages.payments.cards.Downloadthefountain") }}
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 13.5L4.5 1.5M4.5 13.5L1.5 10.5M4.5 13.5L7.5 10.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const router = useRouter();
const goinvice = () => {
  router.push('Invoice');
};

const printModalContent = () => {
  const modalContentElement = document.querySelector(".modal-content");

  if (modalContentElement) {
    const modalContent = modalContentElement.innerHTML;
    const printWindow = window.open("", "", "height=600,width=600");

    printWindow?.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>طباعة الفاتورة</title>
          <style>
          .modalbac{
          display:flex;
          justify-content:center

          }
          .modal-content{
          margin:0 auto;
          }
          .titl{
           display:flex;
          justify-content:between;
         
          }
          .tt{
          display:flex;
          justify-content:between;
          font-size:8px;
          gap:10px;
          }
          .pp{
          flex-direction:column;
          gap:20px;
          display:flex;
          }
          </style>
        </head>
        <body>${modalContent}</body>
      </html>
    `);

    printWindow?.document.close();
    printWindow?.print();
  } else {
    console.warn("لم يتم العثور على العنصر '.modal-content'.");
  }
};
</script>

<style scoped>
.Download {
  padding: 20px 0;
}
.modal-content {
  width: 40rem !important;
}
.btn-dow {
  background-color: #005dba;
}

@media (max-width: 477px) {
  .modal-content {
    width: 23rem !important;
    margin-top: 10px !important;
  }
  .tt {
    flex-wrap: wrap;
  }
  .ssa h3 {
    font-size: 10px !important;
  }
}
</style>
