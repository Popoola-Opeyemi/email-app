<template>
  <div class="container">
    <div class="row row-30">
      <div class="cloud-icon">
        <img src="~/assets/svg/icon1.svg" alt="My Happy SVG" />
      </div>
      <nav class="nav-container">
        <ul class="nav">
          <div class="top">
            <li class="nav__list">
              <NuxtLink to="/inbox" class="nav__item">
                <div class="nav__right">
                  <img
                    class="nav__svg-icon"
                    src="~/assets/svg/inbox.svg"
                    alt="SVG Icon"
                  />
                  <div class="nav__text">Inbox</div>
                </div>
                <div class="nav__left">{{ messagesCount }}</div>
              </NuxtLink>
            </li>
            <li class="nav__list">
              <NuxtLink to="/archive" class="nav__item">
                <div class="nav__right">
                  <img
                    class="nav__svg-icon"
                    src="~/assets/svg/archive.svg"
                    alt="SVG Icon"
                  />
                  <div class="nav__text">Archive</div>
                </div>
                <div class="nav__left">{{archiveMessagesCount}}</div>
              </NuxtLink>
            </li>
          </div>
          <div class="bottom">
            <li class="nav__list">
            <NuxtLink to="" class="nav__item">
              <div class="nav__right">
                <img
                  class="nav__svg-icon"
                  src="~/assets/svg/log-out.svg"
                  alt="SVG Icon"
                />
                <div class="nav__text">Logout</div>
              </div>
            </NuxtLink>
          </li>
          </div>
        </ul>
      </nav>
    </div>
    <div class="row row-70">
      <slot />
    </div>
  </div>
</template>

<script setup>
const messagesCount = useMessagesCount()
const archiveMessagesCount = useArchiveMessagesCount()

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}

.row {
  display: flex;
}

.row-30 {
  height: 100vh;
  background-color: #F8FAFC;
  display: block;
  margin: 0px 0px;
  flex: 0 0 15%;
  width: 260px;
  position: fixed;
  z-index: 1;
  overflow-x: hidden; 
  top: 0; /* Stay at the top */
  left: 100;

  .cloud-icon {
    padding: 20px 0px 0px 0px;
    width: 100%;
  }

  .nav{
    padding:0px 10px;
    display: flex;
    flex-direction: column;
    min-height: 90vh;

    .nav__list {
    width: 95%;
    list-style-type: none;
    flex: 1;
    padding:6px 0px;



    .nav__svg-icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    a.nav__item {
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      color: #333;
      padding: 10px;
      border-radius: 8px;
      transition: border-radius 0.3s ease;

      .nav__right {
        display: flex;
        align-items: center;
      }

      &:hover {
        background-color: #d6e2fb;
        border-radius: 20px;
      }
    }

  }
    .top {
      display: flex;
    flex-direction: column;

      justify-content: space-between;
    }

    .bottom{
      // padding: 10px;

      margin-top: auto; /* Push the element to the bottom */

    }
  }
  
  
}

.row-70 {
  margin-left: 260px;
  width: 100%;
  // flex: 0 0 auto;
}

.column {
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
}
</style>
