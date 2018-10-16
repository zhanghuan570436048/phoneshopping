<template>
   <view>
       <text>home</text>
   </view>
</template>
<script>
export default {
  data () {
    return {
      swiperdata: []
    }
  },
  methods: {
    async getSwiperData () {
      const result = await this.$axios.get('api/public/v1/home/swiperdata')
      console.log(result)
    }
  },
  created () {
    this.getSwiperData()
  }
}
</script>

