<template>
  <div>
    <NavBar />
    <DashboardSideBar />
    <main class="dashboard-main lg:ms-[320px]">
      <div class="content h-full">
        <slot />
      </div>
    </main>
    <!-- <Footer /> -->
  </div>
</template>
<style lang="scss">
.dashboard-main {
  margin-top: 90px;
  background-color: #f2f9ff;
  // margin-inline-start: 320px;
  padding: 20px;
  .content {
  }
}
</style>
