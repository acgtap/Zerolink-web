---
description: 收录了我们支持的一些游戏联机教程
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './nav/data'
</script>

<style src="./nav/index.scss"></style>

# 支持的游戏

以下不完全包含所有支持游戏，理论上支持Steam上85%联机的游戏都可以使用此软件远程联机。


<font color="#660000">点击对应游戏可以跳转至对应游戏的视频教程！</font>


如有问题欢迎加入QQ群：`621320122`


<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
