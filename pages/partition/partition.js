// pages/partition/partition.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        partition:[
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik01ODguOCAzNTkuNjhsLTEyLjAzMi03LjQyNCAxNTAuMjcyLTIwNi41OTJhMzAuOTc2IDMwLjk3NiAwIDAgMC01MS4yLTM2LjM1MmwtMTUzLjYgMjEwLjE3NkwyODEuNiAxNzAuMjRhMzAuOTc2IDMwLjk3NiAwIDEgMC0zMy4wMjQgNTIuNzM2TDQ4Ni40IDM2OS45MmwtMjIuNzg0IDMxLjQ4OGEzMC45NzYgMzAuOTc2IDAgMSAwIDUxLjIgMzYuMzUybDI1LjYtMzUuMDcyIDE2LjEyOCA5LjcyOEEzMC45NzYgMzAuOTc2IDAgMSAwIDU4OC44IDM1OS42OHoiIGZpbGw9IiNGQjgxM0EiPjwvcGF0aD48cGF0aCBkPSJNNzYzLjY0OCA4NTAuNjg4bS01My4yNDggMGE1My4yNDggNTMuMjQ4IDAgMSAwIDEwNi40OTYgMCA1My4yNDggNTMuMjQ4IDAgMSAwLTEwNi40OTYgMFoiIGZpbGw9IiNGQjgxM0EiPjwvcGF0aD48cGF0aCBkPSJNMjYxLjEyIDc5Ny40NGE1My4yNDggNTMuMjQ4IDAgMSAwIDUzLjUwNCA1My4yNDggNTMuMjQ4IDUzLjI0OCAwIDAgMC01My41MDQtNTMuMjQ4eiIgZmlsbD0iI0ZCODEzQSI+PC9wYXRoPjxwYXRoIGQ9Ik0xNDEuMzEyIDMxNC4zNjhtOTIuOTI4IDBsNTU2LjI4OCAwcTkyLjkyOCAwIDkyLjkyOCA5Mi45MjhsMCAzNjAuNzA0cTAgOTIuOTI4LTkyLjkyOCA5Mi45MjhsLTU1Ni4yODggMHEtOTIuOTI4IDAtOTIuOTI4LTkyLjkyOGwwLTM2MC43MDRxMC05Mi45MjggOTIuOTI4LTkyLjkyOFoiIGZpbGw9IiNGRERFODAiPjwvcGF0aD48cGF0aCBkPSJNNTIwLjQ0OCA1NzUuMjMybS0xMjguMjU2IDBhMTI4LjI1NiAxMjguMjU2IDAgMSAwIDI1Ni41MTIgMCAxMjguMjU2IDEyOC4yNTYgMCAxIDAtMjU2LjUxMiAwWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Ik00NzYuOTI4IDU0Ni41NmMwLTI2Ljg4IDE5LjItMzcuNjMyIDQyLjI0LTI1LjZsNDkuNjY0IDI4LjY3MmEyNS42IDI1LjYgMCAwIDEgMCA0OC42NGwtNDkuNjY0IDI4LjY3MmMtMjMuMDQgMTMuNTY4LTQyLjI0IDIuNTYtNDIuMjQtMjQuMzJ6IiBmaWxsPSIjRkI4MTNBIj48L3BhdGg+PC9zdmc+",
                text:"番剧"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik04NzMuNDcyIDMyMS43OTJjLTQ2LjA4LTQ2LjU5Mi0xMDIuNC03My40NzItMTYxLjUzNi00MC4xOTJhMTc3LjE1MiAxNzcuMTUyIDAgMCAwLTUxLjItMTYxLjUzNnMtODMuNDU2IDEwNy41Mi0xNS4xMDQgMjE5LjY0OGMtMTIuMjg4IDEzLjU2OC0yNC4zMiAyNy4xMzYtMzYuMzUyIDM5LjQyNC0yNi44OCAyNy4xMzYgMTQuNTkyIDY5LjEyIDQxLjIxNiA0MS45ODRsNjguNjA4LTY5LjYzMmM0MC43MDQtNDAuOTYgNzYuOC0yMy44MDggMTEyLjg5NiAxMi4yODggMjYuNjI0IDI2Ljg4IDY4LjA5Ni0xNS4xMDQgNDEuNDcyLTQxLjk4NHoiIGZpbGw9IiM1OEQ1OTgiPjwvcGF0aD48cGF0aCBkPSJNNzA1LjAyNCAzNDQuNTc2YTE4OS42OTYgMTg5LjY5NiAwIDAgMC0yNzAuODQ4IDAgMTk1LjA3MiAxOTUuMDcyIDAgMCAwLTQxLjIxNiA2Mi40NjQgMjQ5LjA4OCAyNDkuMDg4IDAgMCAwLTE3Ny42NjQgNzQuNDk2IDI1NiAyNTYgMCAwIDAgMCAzNTkuNjggMjQ4LjU3NiAyNDguNTc2IDAgMCAwIDM1NC44MTYgMCAyNTYgMjU2IDAgMCAwIDczLjQ3Mi0xNzkuMiAxOTAuOTc2IDE5MC45NzYgMCAwIDAgNjEuNDQtNDEuNzI4IDE5NS44NCAxOTUuODQgMCAwIDAgMC0yNzUuNzEyeiIgZmlsbD0iI0ZGNUM3QSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTQuMzA0IDgwOC43MDRhMTg3LjEzNiAxODcuMTM2IDAgMCAxLTI2Ny4yNjQtNS4xMiAxOTMuNTM2IDE5My41MzYgMCAwIDEgNS4xMi0yNzEuMTA0cy00NS4wNTYgMTIwLjgzMiA0My43NzYgMjE0LjI3MmEyMTAuMTc2IDIxMC4xNzYgMCAwIDAgMjE4LjM2OCA2MS45NTIiIGZpbGw9IiNGMTQ3NjciPjwvcGF0aD48L3N2Zz4=",
                text:"国创"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik00MDQuOSAzODYuNzY1Yy03MC44OTc1LTIuNTY1LTE0My4zNDc1IDEyLjA2LTE5Ni42NSAzOC4xODI1LTQ4Ljg0NzUgMjMuOTYyNS0xMTcuNjMgODkuNDYtMTIxLjkyNzUgMTM1LjU2MjVoNzM1LjMyMjVjLTMuMjE3NSAwLTEyLjAxNS05LjQyNzUtMTQuNzM3NS0xMS41Mi01LjAxNzUtMy44MjUtOS43NDI1LTcuODA3NS0xNC43Ni0xMS41NDI1LTExLjkwMjUtOC45MS0yNC42Ni0xNi44OTc1LTM3LjE0NzUtMjQuOTc1YTEwNDAuMTc1IDEwNDAuMTc1IDAgMCAwLTc3LjA2MjUtNDUuNTg1Yy01Mi40Ny0yNy45NDUtMTA3Ljg2NS01MC44MDUtMTY1LjY5LTY1LjAwMjVhNTMzLjg4IDUzMy44OCAwIDAgMC0xMDcuMzQ3NS0xNS4xMiIgZmlsbD0iIzQ3Q0ZFNSI+PC9wYXRoPjxwYXRoIGQ9Ik03NDQuNjA1IDQ4OS4xNjI1Yy0xMi43MTI1IDMyLjMxLTEzNi43MSAzNi43NjUtMTgxLjM5NSAzNi43NjVIMTM3LjgwMjVjLTE1LjIzMjUgMC0yOS43Njc1IDUuMTk3NS0zOS43NTc1IDE0LjI2NS05LjkgOC45Nzc1LTE0LjEwNzUgMjAuNzY3NS0xMS43IDMyLjM1NSAwIDAuMTEyNSAwIDAuMjcgMC4wOSAwLjMzNzUgOS4yOTI1IDQzLjY3MjUgMzUuNzMgODMuMzQgNzYuMzY1IDExNC42ODI1IDEuNjIgMS4yNiAzLjI2MjUgMi41MiA0LjkyNzUgMy43MzUgMTA2Ljc0IDc4LjQ1NzUgMjkyLjUyMjUgODEuMTU3NSA0MjMuNDUgNDMuODc1IDQxLjQ0NS0xMS43OSA4MC44NjUtMjguMTcgMTE1LjE3NzUtNDkuNjM1IDM4Ljk5MjUtMjQuMzkgNzguNzk1LTU3LjMwNzUgMTAyLjMwNzUtOTEuNzMyNSAzLjQ2NS01LjA2MjUgNDEuMjItNjEuMTc3NSA0MS45NjI1LTYwLjg4NWwtMTA2LjAyLTQzLjc2MjV6IiBmaWxsPSIjNDdDRkU1Ij48L3BhdGg+PHBhdGggZD0iTTkxOC4wNTc1IDUwNS4zMTc1bC0yOS44OC0xNy4wNzc1YTc1LjA4MjUgNzUuMDgyNSAwIDAgMC03MC4xMS0yLjEzNzUgNzUuMzc1IDc1LjM3NSAwIDAgMC0zNy40MTc1LTU5LjM1NWwtMjkuOTI1LTE3LjA3NzVhMTEuNDUyNSAxMS40NTI1IDAgMCAwLTE1LjY2IDQuMjc1bC03LjgzIDEzLjcwMjVhNTkuMDYyNSA1OS4wNjI1IDAgMCAwIDIxLjk2IDgwLjU3MjVsMTUuNzk1IDkuMDQ1YTAuMDQ1IDAuMDQ1IDAgMCAxLTAuMDQ1IDAuMDQ1bDUxLjQ4IDI5LjQzIDAuMDQ1LTAuMDQ1IDE3LjQ2IDkuOTlhNTkuMDg1IDU5LjA4NSAwIDAgMCA4MC41NzI1LTIxLjkzNzVsNy44My0xMy43MjVhMTEuNTQyNSAxMS41NDI1IDAgMCAwLTQuMjc1LTE1LjcwNSIgZmlsbD0iIzJCQkFFNCI+PC9wYXRoPjxwYXRoIGQ9Ik02NTQuNTE1IDcxMi40OTc1QzM1MS4zMjc1IDcyMC44Njc1IDI2Ni4zIDU2NC40MjUgMjY2LjMgNTY0LjQyNUg4NS43ODI1YTMxLjk5NSAzMS45OTUgMCAwIDAgMC42MyA4LjQ2YzkuMjkyNSA0My42NzI1IDM1LjczIDgzLjM0IDc2LjM2NSAxMTQuNjgyNSAxLjYyIDEuMjgyNSAzLjI2MjUgMi41MiA0LjkyNzUgMy43MzUgMTA2LjcxNzUgNzguNDU3NSAyOTIuNSA4MS4xOCA0MjMuNDI3NSA0My44NzVhNTA5LjY5MjUgNTA5LjY5MjUgMCAwIDAgNjMuMzgyNS0yMi42OCIgZmlsbD0iI0U1RTZFNiI+PC9wYXRoPjxwYXRoIGQ9Ik02NTQuNTE1IDcxMi40OTc1Yy02NS4xNiAxLjgtMTIwLjE1LTQuNDEtMTY2LjU2NzUtMTQuMjQyNS00OS4wMDUtMTAuMzcyNS0yNi4xNjc1IDU5LjMxLTMuMjE3NSA1Ni43OSAzNy40ODUtNC4wNzI1IDczLjY2NS0xMC41OTc1IDEwNi40MDI1LTE5LjkxMjVhNTAyLjM1NzUgNTAyLjM1NzUgMCAwIDAgNjMuMzgyNS0yMi42MzUiIGZpbGw9IiNFNEU1RTQiPjwvcGF0aD48cGF0aCBkPSJNNDA3LjEyNzUgNjc0LjkyMjVjMjEuNTc3NSA2OS44NCA2OS43MDUgMTE3LjY1MjUgMTE2Ljc3NSAxMTMuNjQ3NSAzLjczNS0wLjMzNzUgNi4yMzI1LTQuMDcyNSA1LjUxMjUtNy43NGwtMjQuNDM1LTEyNS42MTc1YTUuNzE1IDUuNzE1IDAgMCAwLTYuNjgyNS00LjVsLTg2LjcxNSAxNi44OTc1YTUuNzgyNSA1Ljc4MjUgMCAwIDAtNC40NTUgNy4zMTI1IiBmaWxsPSIjNDdDRkU1Ij48L3BhdGg+PHBhdGggZD0iTTQ0MS4yMzc1IDYxNC43MTI1YTI5LjI5NSAyOS4yOTUgMCAxIDEtNTguNjEyNSAwLjAyMjUgMjkuMjk1IDI5LjI5NSAwIDAgMSA1OC42MTI1LTAuMDIyNSIgZmlsbD0iIzAwOTlCQyI+PC9wYXRoPjxwYXRoIGQ9Ik0yNTIuNTk3NSAzMTAuNDY3NWE2NC4yODI1IDY0LjI4MjUgMCAwIDEgNjQuMzA1LTY0LjEwMjVjMTguODEgMCAzNS43MyA4LjEyMjUgNDcuNTIgMjEuMTI3NWE2NC4xNyA2NC4xNyAwIDAgMSAxMTEuNzEyNSA0Mi45NzUgMTYuNTYgMTYuNTYgMCAwIDEtMTYuNTgyNSAxNi41ODI1IDE2LjU2IDE2LjU2IDAgMCAxLTE2LjYwNS0xNi41ODI1IDMxLjA1IDMxLjA1IDAgMCAwLTYxLjk4NzUtMi4xNmgtMC4xOGwwLjExMjUgNzcuNDY3NWExNi41ODI1IDE2LjU4MjUgMCAxIDEtMzMuMTg3NSAwdi03NS4zOTc1YzAtMTcuMDMyNS0xMy45Mjc1LTMwLjkzNzUtMzAuOTYtMzAuOTM3NWEzMS4wNSAzMS4wNSAwIDAgMC0zMS4wMjc1IDMxLjAyNzUgMTYuNTYgMTYuNTYgMCAxIDEtMzMuMTIgMCIgZmlsbD0iIzQ3Q0ZFNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zNjQuMzMyNSA0MDguMDI3NWEyMi4yNTI1IDIyLjI1MjUgMCAwIDEtMjIuMjA3NS0yMi4yM1YzMTAuNGEyNS4zNTc1IDI1LjM1NzUgMCAxIDAtNTAuNzE1IDAuMDkgMjIuMjMgMjIuMjMgMCAwIDEtNDQuNDE1IDBjMC0zOC40NTI1IDMxLjM2NS02OS43NSA2OS45MDc1LTY5Ljc1YTY5Ljc1IDY5Ljc1IDAgMCAxIDQ3LjUyIDE4Ljc2NSA3MC4yIDcwLjIgMCAwIDEgNDcuNjEtMTguNzY1YzM4LjQ1MjUgMCA2OS43NSAzMS4yOTc1IDY5Ljc1IDY5Ljc1YTIyLjIzIDIyLjIzIDAgMCAxLTQ0LjQzNzUgMCAyNS40MjUgMjUuNDI1IDAgMCAwLTUwLjczNzUtMS43Nzc1bC0wLjE1NzUgMi4zODUgMC4wOSA3NC43YTIyLjI1MjUgMjIuMjUyNSAwIDAgMS0yMi4yMDc1IDIyLjIzeiBtLTQ3LjU0MjUtMTM0LjE5YzIwLjE2IDAgMzYuNTYyNSAxNi40MDI1IDM2LjU2MjUgMzYuNTYyNXY3NS40MmExMC45OCAxMC45OCAwIDEgMCAyMS45MTUgMGwtMC4wOS04My4wOTI1aDAuOTIyNWEzNi43NDI1IDM2Ljc0MjUgMCAwIDEgMzUuODItMjguODY3NWMyMC4yMDUgMCAzNi42NTI1IDE2LjQ0NzUgMzYuNjUyNSAzNi42NTI1YTEwLjk4IDEwLjk4IDAgMCAwIDIxLjkzNzUgMGMwLTMyLjI2NS0yNi4yMzUtNTguNS01OC41LTU4LjUtMTYuNDQ3NSAwLTMyLjI4NzUgNy4wMi00My40NDc1IDE5LjMwNWwtNC4xNjI1IDQuNTQ1LTQuMTYyNS00LjYxMjVhNTguNjM1IDU4LjYzNSAwIDAgMC00My4zMzUtMTkuMjgyNSA1OC42MzUgNTguNjM1IDAgMCAwLTU4LjY1NzUgNTguNSAxMC45NTc1IDEwLjk1NzUgMCAwIDAgMjEuOTE1IDAgMzYuNjc1IDM2LjY3NSAwIDAgMSAzNi42My0zNi42M3oiIGZpbGw9IiM0N0NGRTUiPjwvcGF0aD48cGF0aCBkPSJNMzg5Ljg3IDYyMS4yODI1aC02Ni4zM2E0Ny43OSA0Ny43OSAwIDAgMS0zNS4wMzI1LTE1LjU5MjVsLTIzLjcxNS0yNS42OTVhMjguNTc1IDI4LjU3NSAwIDAgMC0yMC44OC05LjI5MjVIOTEuMDQ3NWE2LjUyNSA2LjUyNSAwIDEgMSAwLTEzLjA5NWgxNTIuODg3NWMxMS40NTI1IDAgMjIuNTY3NSA0LjkyNzUgMzAuNDg3NSAxMy41MjI1bDIzLjcxNSAyNS43MTc1YzYuNjYgNy4yIDE1LjkzIDExLjM0IDI1LjQyNSAxMS4zNGg2Ni4zM2E2LjUyNSA2LjUyNSAwIDEgMS0wLjAyMjUgMTMuMDk1IiBmaWxsPSIjMDA5OUJDIj48L3BhdGg+PC9zdmc+",
                text:"纪录片"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0yNzMuNDA4IDE2Ni45MTJoNDc3LjY5NmM1OC4zNjggMCAxMDUuOTg0IDQ3LjYxNiAxMDUuOTg0IDEwNS45ODR2NDc3LjY5NmMwIDU4LjM2OC00Ny42MTYgMTA1Ljk4NC0xMDUuOTg0IDEwNS45ODRIMjczLjQwOGMtNTguMzY4IDAtMTA1Ljk4NC00Ny42MTYtMTA1Ljk4NC0xMDUuOTg0VjI3My40MDhDMTY2LjkxMiAyMTUuMDQgMjE1LjA0IDE2Ni45MTIgMjczLjQwOCAxNjYuOTEyeiIgZmlsbD0iIzdCNzhFQiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTI1LjMxMnY5OC44MTZjMzMuMjgtMTQuODQ4IDcyLjcwNCAwLjUxMiA4Ny41NTIgMzMuNzkyIDE0Ljg0OCAzMy4yOC0wLjUxMiA3Mi43MDQtMzMuNzkyIDg3LjU1Mi0xNi44OTYgNy42OC0zNS44NCA3LjY4LTUzLjI0OCAwdjExMS42MTZIMjczLjQwOGMtNTguMzY4IDAtMTA1Ljk4NC00Ny42MTYtMTA1Ljk4NC0xMDUuOTg0VjUxMmgxMzcuMjE2Yy0yMS41MDQgMTkuNDU2LTI0LjA2NCA1My4yNDgtNC42MDggNzQuNzUyIDE5LjQ1NiAyMS41MDQgNTMuMjQ4IDI0LjA2NCA3NC43NTIgNC42MDggMjEuNTA0LTE4Ljk0NCAyNC4wNjQtNTMuMjQ4IDQuNjA4LTc0Ljc1MmwtNC42MDgtNC42MDhINTEydi00MC45NmMtNC4wOTYgMC41MTItOS4yMTYgMC41MTItMTMuMzEyIDAtNTEuMiAwLTg2LjAxNi00Ny42MTYtODYuMDE2LTEwNS45ODRzMjAuOTkyLTEwOC4wMzIgODYuMDE2LTEwOC4wMzJoMTMuMzEyVjE2Ni45MTJoMjM4LjU5MmM1OC4zNjggMCAxMDUuOTg0IDQ3LjYxNiAxMDUuOTg0IDEwNS45ODR2MjUxLjkwNGgtMTIwLjgzMmMyMC45OTItMjMuNTUyIDE5LjQ1Ni01OS4zOTItMy41ODQtODAuODk2LTIzLjU1Mi0yMC45OTItNTkuMzkyLTE5LjQ1Ni04MC44OTYgMy41ODQtMTkuOTY4IDIxLjUwNC0xOS45NjggNTUuMjk2IDAgNzYuOEg1MTJ6IiBmaWxsPSIjOTc5NkVEIj48L3BhdGg+PHBhdGggZD0iTTUxMiA1MjUuMzEydjk4LjgxNmwxMy4zMTItNC4wOTZjMzUuODQtNy42OCA3Mi43MDQgMTUuODcyIDc5Ljg3MiA1Mi4yMjQgNy42OCAzNS44NC0xOC40MzIgNzIuMTkyLTU0LjI3MiA3OC44NDgtNC4wOTYgMS4wMjQtOC43MDQgMS4wMjQtMTMuMzEyIDEuMDI0LTkuMjE2IDAtMTYuMzg0LTMuMDcyLTI1LjA4OC02LjE0NHYxMTEuNjE2aC0xNC4zMzZ2LTEzMi42MDhsMTguNDMyIDguMTkyYzI3LjEzNiAxMS43NzYgNTguMzY4LTAuNTEyIDcwLjE0NC0yNy42NDggMTEuNzc2LTI3LjEzNi0wLjUxMi01OC4zNjgtMjcuNjQ4LTcwLjE0NC0xMy4zMTItNS42MzItMjguNjcyLTUuNjMyLTQyLjQ5NiAwbC0xOC40MzIgOC4xOTJ2LTExNy43NkgzOTkuODcyYzE0Ljg0OCAzMy4yOC0wLjUxMiA3Mi43MDQtMzMuNzkyIDg3LjU1Mi0zMy4yOCAxNC44NDgtNzIuNzA0LTAuNTEyLTg3LjU1Mi0zMy43OTItNy42OC0xNi44OTYtNy42OC0zNS44NCAwLTUzLjI0OEgxNjYuOTEyVjUxMmgxMzcuMjE2Yy0yMS41MDQgMTkuNDU2LTI0LjA2NCA1My4yNDgtNC42MDggNzQuNzUyIDE5LjQ1NiAyMS41MDQgNTMuMjQ4IDI0LjA2NCA3NC43NTIgNC42MDggMjEuNTA0LTE5LjQ1NiAyNC4wNjQtNTMuMjQ4IDQuNjA4LTc0Ljc1MmwtNC42MDgtNC42MDhINTEydi0zOS45MzZoLTEzLjMxMmMtNTEuMiAwLTg2LjAxNi00Ny4xMDQtODYuMDE2LTEwNS45ODRzMjAuOTkyLTEwOS41NjggODYuMDE2LTEwOS41NjhoMTMuMzEyVjE2Ni45MTJoMTMuMzEydjEwNS45ODRoLTI2LjYyNGMtNDkuNjY0IDAtNzMuMjE2IDMzLjI4LTczLjIxNiA5NC4yMDggMCA1My4yNDggMzAuNzIgOTIuNjcyIDczLjIxNiA5Mi42NzIgMy41ODQgMC41MTIgNy42OCAwLjUxMiAxMS4yNjQgMGwxNS4zNi0yLjA0OFY1MTJoMTAyLjkxMmMtMTMuODI0LTM1Ljg0IDQuMDk2LTc2LjggNDAuNDQ4LTkwLjYyNCAzNS44NC0xMy44MjQgNzYuOCA0LjA5NiA5MC42MjQgNDAuNDQ4IDYuMTQ0IDE1Ljg3MiA2LjE0NCAzMy43OTIgMCA1MC4xNzZoOTcuNzkydjEzLjMxMmgtMTIwLjgzMmMyMC45OTItMjMuNTUyIDE5LjQ1Ni01OS4zOTItMy41ODQtODAuODk2LTIzLjU1Mi0yMC45OTItNTkuMzkyLTE5LjQ1Ni04MC44OTYgMy41ODQtMTkuOTY4IDIxLjUwNC0xOS45NjggNTUuMjk2IDAgNzYuOEg1MTJ6IiBmaWxsPSIjNkE2OEM2Ij48L3BhdGg+PHBhdGggZD0iTTQ0NC45MjggNjkzLjI0OGMtMjMuMDQgMTMuMzEyLTUyLjIyNCA1LjEyLTY1LjAyNC0xNy40MDgtNC4wOTYtNy42OC02LjE0NC0xNS4zNi02LjE0NC0yNC4wNjRWMzkyLjE5MmMwLTI2LjYyNCAyMC45OTItNDcuNjE2IDQ3LjYxNi00Ny42MTYgOC43MDQgMCAxNi44OTYgMi4wNDggMjQuNTc2IDYuNjU2bDIyMS42OTYgMTMyLjYwOGMyMy4wNCAxMy4zMTIgMzAuMjA4IDQyLjQ5NiAxNi44OTYgNjUuMDI0LTQuMDk2IDYuNjU2LTEwLjI0IDEyLjgtMTYuODk2IDE2Ljg5NiIgZmlsbD0iI0ZEREU4MCI+PC9wYXRoPjwvc3ZnPg==",
                text:"动画"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik04ODEuOTIgNDYwLjhBMzM1LjM2IDMzNS4zNiAwIDAgMCA1NDcuNTg0IDEyNS42OTZoLTczLjIxNkEzMzUuNjE2IDMzNS42MTYgMCAwIDAgMTM5Ljc3NiA0NjAuOHYzMTMuNmExOC42ODggMTguNjg4IDAgMCAwIDE4LjQzMiAxOC42ODhoNDEuOTg0YzEzLjU2OCA0Ni4zMzYgMzcuODg4IDgwLjM4NCA4OC41NzYgODAuMzg0aDk4LjMwNGEzNy4zNzYgMzcuMzc2IDAgMCAwIDM3LjM3Ni0zNi44NjRsMS4yOC0yODQuNjcyYTM2Ljg2NCAzNi44NjQgMCAwIDAtMzcuMTItMzcuMTJoLTk5Ljg0YTExMS42MTYgMTExLjYxNiAwIDAgMC01MS4yIDEyLjh2LTczLjIxNmEyNDIuNDMyIDI0Mi40MzIgMCAwIDEgMjQxLjY2NC0yNDEuNjY0aDY3LjMyOGEyNDIuMTc2IDI0Mi4xNzYgMCAwIDEgMjQxLjQwOCAyNDEuNjY0djc0LjQ5NmExMTAuNTkyIDExMC41OTIgMCAwIDAtNTQuMjcyLTE0LjA4aC05OS44NGEzNi44NjQgMzYuODY0IDAgMCAwLTM3LjEyIDM3LjEydjI4NC42NzJhMzcuMzc2IDM3LjM3NiAwIDAgMCAzNy4zNzYgMzYuODY0aDk4LjMwNGM1MS4yIDAgNzUuMDA4LTM0LjA0OCA4OC41NzYtODAuMzg0aDQxLjk4NGExOC42ODggMTguNjg4IDAgMCAwIDE4LjQzMi0xOC42ODh6IiBmaWxsPSIjNDVDN0REIj48L3BhdGg+PHBhdGggZD0iTTY0Ni4xNDEwNDMgODI1LjIyMDk2M20wLjA0NTM5Ni0zMi41MTE5NjlsMC4yNzM4MDEtMTk2LjA5NTgwOXEwLjA0NTM5NS0zMi41MTE5NjggMzIuNTU3MzY0LTMyLjQ2NjU3M2wxLjAyMzk5OSAwLjAwMTQzcTMyLjUxMTk2OCAwLjA0NTM5NSAzMi40NjY1NzMgMzIuNTU3MzY0bC0wLjI3MzgwMiAxOTYuMDk1ODA5cS0wLjA0NTM5NSAzMi41MTE5NjgtMzIuNTU3MzYzIDMyLjQ2NjU3M2wtMS4wMjM5OTktMC4wMDE0M3EtMzIuNTExOTY4LTAuMDQ1Mzk1LTMyLjQ2NjU3My0zMi41NTczNjRaIiBmaWxsPSIjRkY1QzdBIj48L3BhdGg+PHBhdGggZD0iTTMwNy4yMjI2MDggODI1LjI0NjU2M20wLjA0NTM5NS0zMi41MTE5NjlsMC4yNzM4MDEtMTk2LjA5NTgwOXEwLjA0NTM5NS0zMi41MTE5NjggMzIuNTU3MzY0LTMyLjQ2NjU3M2wxLjAyMzk5OSAwLjAwMTQzcTMyLjUxMTk2OCAwLjA0NTM5NSAzMi40NjY1NzMgMzIuNTU3MzY0bC0wLjI3MzgwMSAxOTYuMDk1ODA5cS0wLjA0NTM5NSAzMi41MTE5NjgtMzIuNTU3MzY0IDMyLjQ2NjU3M2wtMS4wMjM5OTktMC4wMDE0M3EtMzIuNTExOTY4LTAuMDQ1Mzk1LTMyLjQ2NjU3My0zMi41NTczNjRaIiBmaWxsPSIjRkY1QzdBIj48L3BhdGg+PC9zdmc+",
                text:"音乐"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik05NTYuNjcyIDUxMy43OTJhNDc2LjQxNiA0NzYuNDE2IDAgMCAwLTg5MC4zNjggMEw1MTIgNzI3LjI5NmwtOTUuMjMyIDQ1LjU2OGExMTcuNzYgMTE3Ljc2IDAgMCAwIDE5Mi4yNTYgMEw1MTIgNzI3LjA0eiIgZmlsbD0iI0ZDNkI4QSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNzI3LjI5NmwyMDguNjQtOTkuODRhMjIyLjk3NiAyMjIuOTc2IDAgMCAwLTQxNi43NjggMHoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNNDA1LjQ1MjggNzUxLjUzOTJsNTQxLjE4NC0yNTguNTg1NiAxNC4wMjg4IDI5LjMxMi01NDEuMTg0IDI1OC42MTEyeiIgZmlsbD0iI0ZGNUM3QSI+PC9wYXRoPjxwYXRoIGQ9Ik02NjYuNjI0IDU0NS43OTJsLTE4LjY4OC0xNS4zNi0xMTIuNjQgMTM1LjQyNCA0MC4xOTItMTczLjA1Ni0yMy41NTItNS42MzItNDAuMTkyIDE3Mi41NDQtNDAuNDQ4LTE3Mi41NDQtMjMuODA4IDUuNjMyIDQwLjcwNCAxNzMuMDU2LTExMi44OTYtMTM1LjQyNC0xOC42ODggMTUuMzYgMTExLjYxNiAxMzQuMTQ0LTM5MS42OC0xODYuODgtMTMuODI0IDI5LjE4NCA1NDEuMTg0IDI1OC41NiAxNC4wOC0yOS40NC04Ny41NTItNDEuNzI4IDEzNi4xOTItMTYzLjg0eiIgZmlsbD0iI0YxNDc2NyI+PC9wYXRoPjwvc3ZnPg==",
                text:"舞蹈"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0xNjYuNCAxNjYuMTQ0bTkwLjExMiAwbDUxMC45NzYgMHE5MC4xMTIgMCA5MC4xMTIgOTAuMTEybDAgNTEwLjk3NnEwIDkwLjExMi05MC4xMTIgOTAuMTEybC01MTAuOTc2IDBxLTkwLjExMiAwLTkwLjExMi05MC4xMTJsMC01MTAuOTc2cTAtOTAuMTEyIDkwLjExMi05MC4xMTJaIiBmaWxsPSIjNThENTk4Ij48L3BhdGg+PHBhdGggZD0iTTMwNy4yIDMyNS42MzJoMTM2LjQ0OHYxMzYuNDQ4SDMwNy4yek01ODAuMDk2IDMyNS42MzJoMTM2LjQ0OHYxMzYuNDQ4aC0xMzYuNDQ4eiIgZmlsbD0iIzE3QUQ4QSI+PC9wYXRoPjxwYXRoIGQ9Ik00NDMuNjQ4IDQ2Mi4zMzZ2NzUuNzc2aC02NC4yNTZ2MjA0LjU0NGg1OS4zOTJ2LTY4LjA5Nkg1ODUuMjE2djY4LjA5Nmg1OS4xMzZ2LTIwNC41NDRoLTY0LjI1NnYtNzUuNzc2aC0xMzYuNDQ4eiIgZmlsbD0iIzE3QUQ4QSI+PC9wYXRoPjwvc3ZnPg==",
                text:"游戏"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik00OTIuMjcwOTMzIDE0Ny43MjkwNjdBMjU1LjM0MjkzMyAyNTUuMzQyOTMzIDAgMCAxIDYyNy4yIDYyMC4yNjI0djUxLjJhMzcuNTQ2NjY3IDM3LjU0NjY2NyAwIDAgMS0yNS42IDM0LjEzMzMzM2gtMjIxLjg2NjY2N2E0NC42NTQ5MzMgNDQuNjU0OTMzIDAgMCAxLTI1LjYtMzQuMTMzMzMzdi01MS4yYTI1Ni42NDg1MzMgMjU2LjY0ODUzMyAwIDAgMSAxMzguMTM3Ni00NzIuNTMzMzMzeiIgZmlsbD0iI0ZGQTIwMCI+PC9wYXRoPjxwYXRoIGQ9Ik01NTAuNCA1MzQuOTI5MDY3di03Ni44aDUxLjJjNDYuNjA5MDY3IDAgNTEuMi0yNi43ODYxMzMgNTEuMi00Mi42NjY2Njd2LTEyOGMwLTIzLjExNjgtMTcuMjAzMi00Mi42NjY2NjctNTEuMi00Mi42NjY2NjdoLTIxMy4zMzMzMzNjLTQyLjEwMzQ2NyAwLTU5LjczMzMzMyAyMS4xMTE0NjctNTkuNzMzMzM0IDQyLjY2NjY2N3Y3Ni44aDEwMi40di02OC4yNjY2NjdoMTE5LjQ2NjY2N3YxMTkuNDY2NjY3aC01MS4yYy02MC41MDEzMzMtMC41NjMyLTc2LjggMjQuNDA1MzMzLTc2LjggNDIuNjY2NjY3djc2LjhoMTI4eiBtLTYyLjY2ODggMjQuNTMzMzMzYTU5LjczMzMzMyA1OS43MzMzMzMgMCAxIDEtNTkuNzMzMzMzIDU5LjczMzMzMyA1OS43MzMzMzMgNTkuNzMzMzMzIDAgMCAxIDU5LjczMzMzMy01OS43MzMzMzN6IiBmaWxsPSIjRkZGMEQzIj48L3BhdGg+PHBhdGggZD0iTTM1NC4xMzMzMzMgNzM5LjczNzZoMjczLjA2NjY2N3Y4LjUzMzMzM2ExMjggMTI4IDAgMCAxLTEyOCAxMjhoLTE3LjA2NjY2N2ExMjggMTI4IDAgMCAxLTEyOC0xMjh2LTguNTMzMzMzeiIgZmlsbD0iIzVGQjVFQyI+PC9wYXRoPjxwYXRoIGQ9Ik03NDYuNjY2NjY3IDIxMC42NjI0aDExOS40NjY2NjZhMTcuMDY2NjY3IDE3LjA2NjY2NyAwIDAgMSAwIDM0LjEzMzMzM2gtMTE5LjQ2NjY2NmExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxIDAtMzQuMTMzMzMzeiBtNTkuNzMzMzMzLTU5LjczMzMzM2ExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxIDE3LjA2NjY2NyAxNy4wNjY2NjZ2MTE5LjQ2NjY2N2ExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxLTM0LjEzMzMzNCAwdi0xMTkuNDY2NjY3YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEgMTcuMDY2NjY3LTE3LjA2NjY2NnoiIGZpbGw9IiNGRkUwNzQiPjwvcGF0aD48cGF0aCBkPSJNMTU3Ljg2NjY2NyA2NjIuOTI5MDY3aDExOS40NjY2NjZhMTcuMDY2NjY3IDE3LjA2NjY2NyAwIDAgMSAwIDM0LjEzMzMzM2gtMTE5LjQ2NjY2NmExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxIDAtMzQuMTMzMzMzeiBtNTkuNzMzMzMzLTU5LjczMzMzNGExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxIDE3LjA2NjY2NyAxNy4wNjY2Njd2MTE5LjQ2NjY2N2ExNy4wNjY2NjcgMTcuMDY2NjY3IDAgMCAxLTM0LjEzMzMzNCAwdi0xMTkuNDY2NjY3YTE3LjA2NjY2NyAxNy4wNjY2NjcgMCAwIDEgMTcuMDY2NjY3LTE3LjA2NjY2N3oiIGZpbGw9IiNGRkUwNzQiPjwvcGF0aD48cGF0aCBkPSJNMjAwLjUzMzMzMyA2NjIuOTM3NmgzNC4xMzMzMzR2MzQuMTMzMzMzaC0zNC4xMzMzMzR6IiBmaWxsPSIjRkZFMDc0Ij48L3BhdGg+PHBhdGggZD0iTTc4OS4zMzMzMzMgMjEwLjY3MDkzM2gzNC4xMzMzMzR2MzQuMTMzMzM0aC0zNC4xMzMzMzR6IiBmaWxsPSIjRkZFMDc0Ij48L3BhdGg+PC9zdmc+Cgo=",
                text:"知识"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0yOTguNDk2IDI4NC45MjhsMTcuNjY0LTUxLjJhMzYuNjA4IDM2LjYwOCAwIDAgMSAzMy4yOC0yMi4wMTZoMzI1LjM3NmEzNy4xMiAzNy4xMiAwIDAgMSAzNC4zMDQgMjIuMDE2bDE3LjQwOCA1MS4yaDg4LjU3NmE2OS4zNzYgNjkuMzc2IDAgMCAxIDY2LjU2IDcwLjY1NnYzNzcuMzQ0YTY5LjEyIDY5LjEyIDAgMCAxLTY3Ljg0IDcwLjE0NEgyMDkuOTJhNjkuMTIgNjkuMTIgMCAwIDEtNjguMzUyLTcwLjE0NFYzNTUuNTg0YTY5LjM3NiA2OS4zNzYgMCAwIDEgNjguMzUyLTcwLjY1NnoiIGZpbGw9IiNGRkJBN0IiPjwvcGF0aD48cGF0aCBkPSJNMTQxLjU2OCA0NTcuNzI4aDc0MC4wOTZ2MjcxLjM2YTY5LjYzMiA2OS42MzIgMCAwIDEtNzMuNzI4IDczLjk4NEgyMTAuNjg4YTY5LjEyIDY5LjEyIDAgMCAxLTY5LjEyLTY5LjM3NnoiIGZpbGw9IiNGQjk1MkMiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDM1OC40YTE5Ny4zNzYgMTk3LjM3NiAwIDEgMS0xOTcuMzc2IDE5Ny4zNzZBMTk3LjYzMiAxOTcuNjMyIDAgMCAxIDUxMiAzNTguNHoiIGZpbGw9IiNGQjk1MkMiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDQwOS42YTE0OC4yMjQgMTQ4LjIyNCAwIDEgMS0xNDcuOTY4IDE0Ny45NjhBMTQ3Ljk2OCAxNDcuOTY4IDAgMCAxIDUxMiA0MDkuNnoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDQ1Ny43MjhhOTguODE2IDk4LjgxNiAwIDEgMS05OC41NiA5OC41NkE5OC41NiA5OC41NiAwIDAgMSA1MTIgNDU3LjcyOHoiIGZpbGw9IiNGQjk1MkMiPjwvcGF0aD48cGF0aCBkPSJNNzMzLjY5NiAzNTguNGg3My45ODRhMjUuNiAyNS42IDAgMCAxIDI1LjYgMjUuNiAyNS42IDI1LjYgMCAwIDEtMjUuNiAyNS42aC03My45ODRhMjUuNiAyNS42IDAgMCAxLTI1LjYtMjUuNiAyNS42IDI1LjYgMCAwIDEgMjUuNi0yNS42eiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPjwvc3ZnPg==",
                text:"数码"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik04ODEuNDA4IDY2NC4wNjRWNTA0LjMyYTE2OC4xOTIgMTY4LjE5MiAwIDAgMC0xMjgtMTYyLjU2bC03LjkzNi0xLjc5MnYxNDQuODk2YTEyLjI4OCAxMi4yODggMCAwIDEtMTQuNTkyIDExLjc3NiAxNzAuNzUyIDE3MC43NTIgMCAwIDAtMzAuNDY0LTIuODE2aC0xMzguNzUydi0yNy42NDhhMzcuNjMyIDM3LjYzMiAwIDAgMSAxMS43NzYtMjcuNjQ4IDE3NS44NzIgMTc1Ljg3MiAwIDAgMCA1Ny44NTYtMTM1LjY4QTE3OS4yIDE3OS4yIDAgMCAwIDQ2MC44IDEzMi4zNTJhMTc1Ljg3MiAxNzUuODcyIDAgMCAwLTE4MC45OTIgMTc2LjEyOFY0MDkuNmgzMi4yNTZhMjI1LjUzNiAyMjUuNTM2IDAgMCAwIDE1Ljg3MiAxOS4yIDM2LjYwOCAzNi42MDggMCAwIDEgOS40NzIgMjUuNnY0Mi40OTZBMTkzLjc5MiAxOTMuNzkyIDAgMCAwIDE3OS4yIDcxMi45NmExOTcuMTIgMTk3LjEyIDAgMCAwIDE5Ny4xMiAxNjYuNjU2aDMyNS4xMmExNDguNDggMTQ4LjQ4IDAgMCAwIDQ1LjU2OC02LjE0NCAyMTcuMDg4IDIxNy4wODggMCAwIDAgNjQuMjU2LTMxLjc0NCAxNzYuODk2IDE3Ni44OTYgMCAwIDAgMTguMTc2LTE1LjYxNmw0LjYwOC00LjM1MmExNTYuMTYgMTU2LjE2IDAgMCAwIDQ3LjM2LTExMS44NzJ2LTM1Ljg0YzAuNTEyLTMuMDcyIDAuMjU2LTYuNjU2IDAtOS45ODR6IiBmaWxsPSIjRkZENzc4Ij48L3BhdGg+PHBhdGggZD0iTTQ2OC43MzYgMjM4LjU5MmE0MC4xOTIgNDAuMTkyIDAgMSAwIDQwLjE5MiA0MC4xOTIgNDAuMTkyIDQwLjE5MiAwIDAgMC00MC4xOTItNDAuMTkyek0zMjMuNTg0IDM2Mi43NTJIMjE3LjZhMzQuODE2IDM0LjgxNiAwIDEgMCAwIDY5LjM3NmgxMDYuMjRhMzQuODE2IDM0LjgxNiAwIDEgMCAwLTY5LjM3NnoiIGZpbGw9IiNGQjgxM0EiPjwvcGF0aD48L3N2Zz4=",
                text:"生活"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik05MTguNzg0IDUxMC4yMDhhMTg3LjkwNCAxODcuOTA0IDAgMCAwLTg4LjgzMi0xNTkuNDg4IDE1Ni40MTYgMTU2LjQxNiAwIDAgMCAxLjc5Mi0yMi4wMTYgMTUwLjc4NCAxNTAuNzg0IDAgMCAwLTIxMC45NDQtMTM4LjQ5NiAxNTEuMDQgMTUxLjA0IDAgMCAwLTIxNi4zMiAwIDE1MC43ODQgMTUwLjc4NCAwIDAgMC0yMTAuOTQ0IDEzOC40OTYgMTU2LjQxNiAxNTYuNDE2IDAgMCAwIDEuNzkyIDIyLjAxNiAxODcuNjQ4IDE4Ny42NDggMCAwIDAtMTMuODI0IDMwOS41MDR2MS41MzZhMjE1LjI5NiAyMTUuMjk2IDAgMCAwIDMzMi44IDE3OS4yIDIxNS4wNCAyMTUuMDQgMCAwIDAgMzMyLjgtMTc5LjJ2LTIuNTZhMTg3LjkwNCAxODcuOTA0IDAgMCAwIDcxLjY4LTE0OC45OTJ6IiBmaWxsPSIjRkM2QjhBIj48L3BhdGg+PHBhdGggZD0iTTY4MC43MDQgNDc5Ljc0NEExNTAuNTI4IDE1MC41MjggMCAwIDEgNTcyLjY3MiA0MzUuMmExNTAuMDE2IDE1MC4wMTYgMCAwIDEtMTIwLjA2NCAwIDE1MC41MjggMTUwLjUyOCAwIDAgMS0xMDguMDMyIDQ1LjgyNGgtMTEuMjY0djE2Ny4xNjhhMTY2LjQgMTY2LjQgMCAwIDAgMTY1Ljg4OCAxNjUuODg4aDMzLjUzNmExNjYuNCAxNjYuNCAwIDAgMCAxNjUuODg4LTE2NS44ODh2LTE2OS43MjhhMTM3LjIxNiAxMzcuMjE2IDAgMCAxLTE3LjkyIDEuMjh6IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PHBhdGggZD0iTTUxMC40NjQgNjUxLjI2NG0tMzMuNTM2IDBhMzMuNTM2IDMzLjUzNiAwIDEgMCA2Ny4wNzIgMCAzMy41MzYgMzMuNTM2IDAgMSAwLTY3LjA3MiAwWiIgZmlsbD0iI0UyMDA2QyI+PC9wYXRoPjxwYXRoIGQ9Ik02MzUuOTA0IDU1NC40OTZINjE0LjR2LTIxLjUwNGExMi4wMzIgMTIuMDMyIDAgMCAwLTExLjc3Ni0xMS43NzZoLTQuODY0YTEyLjAzMiAxMi4wMzIgMCAwIDAtMTEuNzc2IDExLjc3NnYyMS41MDRoLTIxLjI0OGExMS43NzYgMTEuNzc2IDAgMCAwLTExLjc3NiAxMS41MnY1LjEyYTExLjc3NiAxMS43NzYgMCAwIDAgMTEuNzc2IDExLjUyaDIxLjI0OHYyMS41MDRhMTIuMDMyIDEyLjAzMiAwIDAgMCAxMS43NzYgMTEuNzc2aDQuODY0YTEyLjAzMiAxMi4wMzIgMCAwIDAgMTEuNzc2LTExLjc3NnYtMjEuNTA0aDIxLjI0OGExMS43NzYgMTEuNzc2IDAgMCAwIDExLjc3Ni0xMS41MnYtNS4xMmExMS43NzYgMTEuNzc2IDAgMCAwLTExLjUyLTExLjUyek00NTUuOTM2IDU1NC40OTZINDM1LjJ2LTIxLjUwNGExMi4wMzIgMTIuMDMyIDAgMCAwLTExLjc3Ni0xMS43NzZoLTQuODY0YTEyLjAzMiAxMi4wMzIgMCAwIDAtMTEuNzc2IDExLjc3NnYyMS41MDRIMzg0YTExLjc3NiAxMS43NzYgMCAwIDAtMTEuNzc2IDExLjUydjUuMTJhMTEuNzc2IDExLjc3NiAwIDAgMCAxMS43NzYgMTEuNTJoMjEuMjQ4djIxLjUwNGExMi4wMzIgMTIuMDMyIDAgMCAwIDExLjc3NiAxMS43NzZoNC44NjRhMTIuMDMyIDEyLjAzMiAwIDAgMCAxMy4zMTItMTEuNzc2di0yMS41MDRoMjEuMjQ4YTExLjUyIDExLjUyIDAgMCAwIDExLjc3Ni0xMS41MnYtNS4xMmExMS41MiAxMS41MiAwIDAgMC0xMi4yODgtMTEuNTJ6IiBmaWxsPSIjRkY1QzdBIj48L3BhdGg+PHBhdGggZD0iTTYwMC4zMiA2NTEuMDA4YTEyLjI4OCAxMi4yODggMCAwIDAtMTIuMjg4IDEyLjU0NGMwIDM0LjA0OC0zNC44MTYgNjEuNjk2LTc2LjggNjEuNjk2cy03Ni44LTI3LjY0OC03Ni44LTYxLjY5NmExMi41NDQgMTIuNTQ0IDAgMSAwLTI1LjYgMGMwIDQ3LjYxNiA0NS44MjQgODYuNTI4IDEwMi40IDg2LjUyOHMxMDIuNC0zOC45MTIgMTAyLjQtODYuNTI4YTEyLjU0NCAxMi41NDQgMCAwIDAtMTMuMzEyLTEyLjU0NHoiIGZpbGw9IiNFQjUzQTgiPjwvcGF0aD48L3N2Zz4=",
                text:"鬼畜"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik02OTEuMiAyMDQuOGE0NC4wMzIgNDQuMDMyIDAgMCAxIDI5Ljk1MiAzNC4wNDggMTE3Ljc2IDExNy43NiAwIDAgMS0xMy4wNTYgNzYuOHMtMTkuMiAyOS45NTItMjQuMzIgMzkuOTM2YTIzNS4wMDggMjM1LjAwOCAwIDAgMC0yNS42IDEwNy4wMDh2NDAuNzA0SDM2NS4zMTJ2LTM5LjQyNGEyMzUuMDA4IDIzNS4wMDggMCAwIDAtMjUuNi0xMDcuMDA4Yy01LjEyLTkuOTg0LTI0LjMyLTM5LjkzNi0yNC4zMi0zOS45MzZhMTE3Ljc2IDExNy43NiAwIDAgMS0xMy4wNTYtNzYuOEE0NC41NDQgNDQuNTQ0IDAgMCAxIDMzNi44OTYgMjA0LjhWMTQ3LjcxMmEyOS45NTIgMjkuOTUyIDAgMCAxIDI3LjEzNi0zMS43NDQgMjkuOTUyIDI5Ljk1MiAwIDAgMSAyNy42NDggMzEuNzQ0djczLjcyOEEyMzcuMDU2IDIzNy4wNTYgMCAwIDAgNTEyIDI1My45NTJhMjQxLjQwOCAyNDEuNDA4IDAgMCAwIDEyNS4xODQtMzUuMDcyVjE0Ny43MTJhMjcuMTM2IDI3LjEzNiAwIDEgMSA1My43NiAweiIgZmlsbD0iI0ZGNkE5QiI+PC9wYXRoPjxwYXRoIGQ9Ik02NTguNDMyIDQ4Ny45MzZIMzY1LjMxMkwyMDQuOCA3ODAuMjg4YTM2LjM1MiAzNi4zNTIgMCAwIDAgMTAuMjQgNDYuNTkyIDQ5Mi4yODggNDkyLjI4OCAwIDAgMCA1OTUuNDU2IDAgMzYuNjA4IDM2LjYwOCAwIDAgMCA4LjcwNC00Ny4zNnoiIGZpbGw9IiNGRjlEQzYiPjwvcGF0aD48cGF0aCBkPSJNNDA5LjYgNTM3LjZhOS45ODQgOS45ODQgMCAwIDAtMTMuNTY4IDQuNjA4bC0xMjQuMTYgMjUwLjYyNGExMC40OTYgMTAuNDk2IDAgMCAwIDQuNjA4IDEzLjU2OCAxNC44NDggMTQuODQ4IDAgMCAwIDQuNjA4IDAgOS45ODQgOS45ODQgMCAwIDAgOC45Ni01LjYzMmwxMjQuMTYtMjUwLjg4QTEwLjI0IDEwLjI0IDAgMCAwIDQwOS42IDUzNy42ek00NTUuOTM2IDY0My4wNzJhOS45ODQgOS45ODQgMCAwIDAtMTIuMDMyIDcuNDI0bC00MC40NDggMTcwLjc1MmExMC4yNCAxMC4yNCAwIDAgMCA3LjQyNCAxMi4yODhoMi4zMDRhOS43MjggOS43MjggMCAwIDAgOS43MjgtNy45MzZsNDAuNDQ4LTE3MC43NTJhOS45ODQgOS45ODQgMCAwIDAtNy40MjQtMTEuNzc2ek03NTAuODQ4IDc5MS44MDhsLTEyNC4xNi0yNTAuNjI0QTkuOTg0IDkuOTg0IDAgMCAwIDYxNC40IDUzNy42YTEwLjI0IDEwLjI0IDAgMCAwLTQuNjA4IDEzLjMxMmwxMjQuMTYgMjUwLjg4YTkuOTg0IDkuOTg0IDAgMCAwIDguOTYgNS42MzIgMTQuODQ4IDE0Ljg0OCAwIDAgMCA0LjYwOCAwIDEwLjQ5NiAxMC40OTYgMCAwIDAgMy4zMjgtMTUuNjE2ek01NzkuODQgNjUwLjQ5NmE5Ljk4NCA5Ljk4NCAwIDAgMC0xOS40NTYgNC42MDhsNDAuNDQ4IDE3MC43NTJhOS43MjggOS43MjggMCAwIDAgOS43MjggNy45MzZoMi4zMDRhMTAuMjQgMTAuMjQgMCAwIDAgNy40MjQtMTIuMjg4eiIgZmlsbD0iI0ZGNkE5QiI+PC9wYXRoPjwvc3ZnPg==",
                text:"时尚"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik01MzQuNDQyNzk2IDM3OC45ODIxNzVtMzYuMjAzODY3IDM2LjIwMzg2N2wzMC41OTIyNjggMzAuNTkyMjY4cTM2LjIwMzg2NyAzNi4yMDM4NjcgMCA3Mi40MDc3MzRsLTM2MC41OTA1MTggMzYwLjU5MDUxOHEtMzYuMjAzODY3IDM2LjIwMzg2Ny03Mi40MDc3MzQgMGwtMzAuNTkyMjY4LTMwLjU5MjI2OHEtMzYuMjAzODY3LTM2LjIwMzg2NyAwLTcyLjQwNzczNWwzNjAuNTkwNTE4LTM2MC41OTA1MTdxMzYuMjAzODY3LTM2LjIwMzg2NyA3Mi40MDc3MzQgMFoiIGZpbGw9IiNGRjg2OTMiPjwvcGF0aD48cGF0aCBkPSJNMzY5LjkyIDU0My43NDRsMTM3LjQ3Mi0xMzcuNDcyYTM4LjkxMiAzOC45MTIgMCAwIDEgNTQuNTI4IDBsNDguMzg0IDQ4LjY0YTM4LjQgMzguNCAwIDAgMSAwIDU0LjUyOGwtMTM3Ljk4NCAxMzcuOTg0eiIgZmlsbD0iI0ZDNjM3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0yODYuMTMzOTQxIDYzMS4wMjE4MDFtMTIuODU0NjE2IDEyLjg1MDEzbDcyLjYwMTQyMiA3Mi41NzYwODNxMTIuODU0NjE2IDEyLjg1MDEyOSAwLjAwNDQ4NiAyNS43MDQ3NDZsLTEuNjI4ODkgMS42Mjk0NThxLTEyLjg1MDEyOSAxMi44NTQ2MTYtMjUuNzA0NzQ1IDAuMDA0NDg2bC03Mi42MDE0MjItNzIuNTc2MDgzcS0xMi44NTQ2MTYtMTIuODUwMTI5LTAuMDA0NDg2LTI1LjcwNDc0NWwxLjYyODg5LTEuNjI5NDU5cTEyLjg1MDEyOS0xMi44NTQ2MTYgMjUuNzA0NzQ1LTAuMDA0NDg2WiIgZmlsbD0iI0ZGQTlCMSI+PC9wYXRoPjxwYXRoIGQ9Ik03MzcuMDI0IDU0Ny41ODRhOTkuMzI4IDk5LjMyOCAwIDAgMSA2Mi43Mi02Mi43Mmw1MS4yLTEzLjU2OGEyNy4xMzYgMjcuMTM2IDAgMCAwIDEzLjA1Ni00OS42NjRMODI2LjYyNCAzODRhOTguODE2IDk4LjgxNiAwIDAgMS0yMi43ODQtODUuNzZsMTYuODk2LTYzLjIzMmM3LjE2OC0yNy4xMzYtOC45Ni00My41Mi0zNi4wOTYtMzYuMDk2bC02My4yMzIgMTYuODk2YTk4LjgxNiA5OC44MTYgMCAwIDEtODUuNzYtMjMuMDRsLTM3LjM3Ni0zNi44NjRhMjcuMTM2IDI3LjEzNiAwIDAgMC00OS40MDggMTMuMzEybC0xMy44MjQgNTEuMmE5Ny43OTIgOTcuNzkyIDAgMCAxLTYyLjQ2NCA2Mi43MmwtNTEuMiAxMy44MjRhMjcuMTM2IDI3LjEzNiAwIDAgMC0xMy4zMTIgNDkuNDA4TDQ0NS40NCAzODRhOTcuNTM2IDk3LjUzNiAwIDAgMSAyMy4wNCA4NS41MDRsLTE2Ljg5NiA2My4yMzJjLTcuNDI0IDI3LjM5MiA4Ljk2IDQzLjUyIDM2LjA5NiAzNi4zNTJsNjMuMjMyLTE2Ljg5NmE5Ny43OTIgOTcuNzkyIDAgMCAxIDg1Ljc2IDIyLjc4NGwzNy4zNzYgMzcuMzc2YTI2Ljg4IDI2Ljg4IDAgMCAwIDQ5LjQwOC0xMy4zMTJ6IiBmaWxsPSIjRkRERTgwIj48L3BhdGg+PHBhdGggZD0iTTg4Ni4yNzIgNDE3LjUzNmwtNzQuNzUyLTc1LjAwOCAzMC40NjQtMTE0LjQzMmE0MS4yMTYgNDEuMjE2IDAgMCAwLTguNzA0LTQxLjQ3MkE0MS43MjggNDEuNzI4IDAgMCAwIDc5MS44MDggMTc5LjJsLTExNC40MzIgMzAuNzItNzQuNzUyLTc2LjAzMkE0MS43MjggNDEuNzI4IDAgMCAwIDU2My4yIDEyMC41NzZhNDEuMjE2IDQxLjIxNiAwIDAgMC0yOC40MTYgMzEuNDg4bC0yNy4zOTIgMTAyLjRMNDA0LjQ4IDI4MS42YTQyLjI0IDQyLjI0IDAgMCAwLTMxLjc0NCAyOC4xNiA0Mi4yNCA0Mi4yNCAwIDAgMCAxMy4zMTIgNDAuNDQ4TDQ2MC44IDQyNS4yMTZsLTMwLjcyIDExNC40MzJhNDEuNzI4IDQxLjcyOCAwIDAgMCA4Ljk2IDQxLjQ3MiAzNy44ODggMzcuODg4IDAgMCAwIDI3LjM5MiAxMC43NTIgNTYuODMyIDU2LjgzMiAwIDAgMCAxNC4wOC0yLjA0OGwxMTQuNDMyLTMwLjcyIDc0Ljc1MiA3NS4wMDhhNDUuODI0IDQ1LjgyNCAwIDAgMCAzMS4yMzIgMTQuMzM2IDM0LjMwNCAzNC4zMDQgMCAwIDAgOC45NiAwIDQxLjIxNiA0MS4yMTYgMCAwIDAgMjguNDE2LTMxLjQ4OGwyNy4zOTItMTAyLjQgMTAyLjQtMjcuMzkyYTQxLjk4NCA0MS45ODQgMCAwIDAgMzEuNDg4LTI4LjQxNiA0MC45NiA0MC45NiAwIDAgMC0xMy4zMTItNDEuMjE2eiBtLTg0LjczNi0yMDMuNTJoNS4xMmExNi44OTYgMTYuODk2IDAgMCAxIDAgNS4xMmwtMjUuNiA5My42OTYtNzIuOTYtNzMuNzI4eiBtLTMyIDEzOS43NzZsLTM0LjU2IDEyOC0xMjggMzQuNTYtMTAyLjQtMTAyLjQgMzQuNTYtMTI4IDEyOC0zNC41NnogbS0xOTkuNDI0LTE5MmMwLTIuNTYgMS43OTItNC4wOTYgMS43OTItNC42MDhhOS45ODQgOS45ODQgMCAwIDEgNC4wOTYgMy4wNzJsNTkuNjQ4IDU5LjY0OC04Ny4yOTYgMjMuMjk2eiBtLTE1Ny42OTYgMTYyLjA0OEw0MDkuNiAzMjBhMTIuOCAxMi44IDAgMCAxIDQuODY0LTIuMDQ4bDgxLjE1Mi0yMS43Ni0yMy41NTIgODcuODA4eiBtNTguMzY4IDIzMC40YTE4Ljk0NCAxOC45NDQgMCAwIDEtNS4xMiAwIDE3LjkyIDE3LjkyIDAgMCAxIDAtNS4xMmwyNS42LTkzLjY5Nkw1NjMuMiA1MjguNjR6IG0yMzAuNCA1MS4yYzAgMi44MTYtMS41MzYgNC4wOTYtMS41MzYgNC44NjRhMjAuOTkyIDIwLjk5MiAwIDAgMS00LjM1Mi0zLjMyOGwtNTkuMzkyLTU5LjM5MiA4Ny4yOTYtMjMuNTUyeiBtMTU2LjE2LTE1Ni4xNmwtODEuMTUyIDIxLjc2IDIzLjI5Ni04Ny4wNCA1OS4zOTIgNTkuMzkyYTQwLjk2IDQwLjk2IDAgMCAxIDMuMzI4IDMuODQgMTIuOCAxMi44IDAgMCAxLTQuMDk2IDIuNTZ6IiBmaWxsPSIjRkNDMDI5Ij48L3BhdGg+PC9zdmc+",
                text:"娱乐"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0xNDcuMiAyMDEuNzI4bTc5LjYxNiAwbDU3MS4xMzYgMHE3OS42MTYgMCA3OS42MTYgNzkuNjE2bDAgNDU4LjI0cTAgNzkuNjE2LTc5LjYxNiA3OS42MTZsLTU3MS4xMzYgMHEtNzkuNjE2IDAtNzkuNjE2LTc5LjYxNmwwLTQ1OC4yNHEwLTc5LjYxNiA3OS42MTYtNzkuNjE2WiIgZmlsbD0iIzk3OTZFRCI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjIuOTc2IDI2OS4zMTJoNzcuMDU2djU3Ljg1NkgyMjIuOTc2ek0zOTAuMTQ0IDI2OS4zMTJoNzcuMDU2djU3Ljg1NmgtNzcuMDU2ek01NTcuMzEyIDI2OS4zMTJoNzcuMDU2djU3Ljg1NmgtNzcuMDU2ek03MjQuNDggMjY5LjMxMmg3Ny4wNTZ2NTcuODU2SDcyNC40OHpNMjIyLjk3NiA2OTMuNzZoNzcuMDU2djU3Ljg1NkgyMjIuOTc2ek0zOTAuMTQ0IDY5My43Nmg3Ny4wNTZ2NTcuODU2aC03Ny4wNTZ6TTU1Ny4zMTIgNjkzLjc2aDc3LjA1NnY1Ny44NTZoLTc3LjA1NnpNMTQ3LjIgMzc1LjI5Nmg3MzAuMzY4djI3MC4wOEgxNDcuMnoiIGZpbGw9IiM3Qjc4RUEiPjwvcGF0aD48cGF0aCBkPSJNNTIxLjM2OTgyMiA1MjkuNzA3MDY2bTIzLjM1MTQ5NC0yMy4zNTE0OTVsMi41MzQyNzEtMi41MzQyN3EyMy4zNTE0OTQtMjMuMzUxNDk0IDQ2LjcwMjk4OSAwbDE5OS42NjQzMjcgMTk5LjY2NDMyN3EyMy4zNTE0OTQgMjMuMzUxNDk0IDAgNDYuNzAyOTg5bC0yLjUzNDI3MSAyLjUzNDI3MXEtMjMuMzUxNDk0IDIzLjM1MTQ5NC00Ni43MDI5ODggMGwtMTk5LjY2NDMyOC0xOTkuNjY0MzI4cS0yMy4zNTE0OTQtMjMuMzUxNDk0IDAtNDYuNzAyOTg5WiIgZmlsbD0iI0ZGRDA0MyI+PC9wYXRoPjxwYXRoIGQ9Ik03MDguMzUyIDQxOC44MTZoLTI1LjZ2LTI0LjMyYTEzLjU2OCAxMy41NjggMCAwIDAtMTMuNTY4LTEzLjU2OEg2NjUuNmExMy4zMTIgMTMuMzEyIDAgMCAwLTEzLjMxMiAxMy41Njh2MjQuMzJoLTI1LjZhMTMuNTY4IDEzLjU2OCAwIDAgMC0xMy41NjggMTMuNTY4djUuNjMyYTEzLjU2OCAxMy41NjggMCAwIDAgMTMuNTY4IDEzLjU2OGgyNS42djI0LjMyYTEzLjMxMiAxMy4zMTIgMCAwIDAgMTMuMzEyIDEzLjU2OGg1LjYzMmExMy41NjggMTMuNTY4IDAgMCAwIDEzLjU2OC0xMy41Njh2LTI0LjMyaDI1LjZhMTMuMzEyIDEzLjMxMiAwIDAgMCAxMy4zMTItMTMuNTY4di01LjYzMmExMy4zMTIgMTMuMzEyIDAgMCAwLTE1LjM2LTEzLjU2OHpNNTE3Ljg4OCA0MTguODE2aC0yNS42di0yNC4zMmExMy4zMTIgMTMuMzEyIDAgMCAwLTEzLjMxMi0xMy41NjhoLTUuNjMyYTEzLjU2OCAxMy41NjggMCAwIDAtMTMuNTY4IDEzLjU2OHYyNC4zMkg0MzUuMmExMy4zMTIgMTMuMzEyIDAgMCAwLTEzLjMxMiAxMy41Njh2NS42MzJhMTMuMzEyIDEzLjMxMiAwIDAgMCAxMy4zMTIgMTMuNTY4aDI1LjZ2MjQuMzJhMTMuNTY4IDEzLjU2OCAwIDAgMCAxMy41NjggMTMuNTY4aDUuNjMyYTEzLjMxMiAxMy4zMTIgMCAwIDAgMTMuMzEyLTEzLjU2OHYtMjQuMzJoMjUuNmExMy4zMTIgMTMuMzEyIDAgMCAwIDEzLjMxMi0xMy41Njh2LTUuNjMyYTEzLjMxMiAxMy4zMTIgMCAwIDAtMTQuMzM2LTEzLjU2OHpNNDkzLjU2OCA1NzIuMTZoLTE4LjQzMnYtMTguNDMyYTEwLjI0IDEwLjI0IDAgMCAwLTEwLjI0LTEwLjI0SDQ2MC44YTEwLjI0IDEwLjI0IDAgMCAwLTEwLjI0IDEwLjI0djE4LjQzMmgtMTguNDMyYTEwLjI0IDEwLjI0IDAgMCAwLTEwLjI0IDEwLjI0djQuMzUyYTEwLjI0IDEwLjI0IDAgMCAwIDEwLjI0IDEwLjI0aDE4LjQzMlY2MTQuNGExMC4yNCAxMC4yNCAwIDAgMCAxMC4yNCAxMC4yNGg0LjM1MmExMC4yNCAxMC4yNCAwIDAgMCAxMC4yNC0xMC4yNHYtMTguNDMyaDE4LjQzMmExMC4yNCAxMC4yNCAwIDAgMCAxMC4yNC0xMC4yNHYtNC4zNTJhMTAuMjQgMTAuMjQgMCAwIDAtMTAuNDk2LTkuMjE2eiIgZmlsbD0iI0ZGRDc3OCI+PC9wYXRoPjwvc3ZnPg==",
                text:"影视"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik05NTQuNjI0IDQ1Mi44NjRIOTE5LjA0di0xNjguOTZhMzcuMzc2IDM3LjM3NiAwIDAgMC0yNS42LTM2LjYwOEEzNi42MDggMzYuNjA4IDAgMCAwIDg0Ni44NDggMjgxLjZ2MTcwLjI0SDE5OS45MzZ2LTE2OC45NmEzNy42MzIgMzcuNjMyIDAgMCAwLTI1LjYtMzYuNjA4QTM2LjM1MiAzNi4zNTIgMCAwIDAgMTI4IDI4MS42djE3MC4yNEg5Mi4xNmExNS42MTYgMTUuNjE2IDAgMCAwLTE1LjM2IDE1Ljg3MnY4Mi42ODhhMTUuMzYgMTUuMzYgMCAwIDAgMTUuMzYgMTUuNjE2aDI2Ljg4djg1LjI0OGExMzUuNjggMTM1LjY4IDAgMCAwIDEzNC40IDEzNi4xOTJoMTE0LjQzMmExMzUuNjggMTM1LjY4IDAgMCAwIDEzNC40LTEzNi4xOTJ2LTIwLjk5MmE3LjkzNiA3LjkzNiAwIDAgMSA3LjY4LTcuOTM2aDI1LjZhNy42OCA3LjY4IDAgMCAxIDcuNjggNy45MzZ2MjAuOTkyYTEzNS45MzYgMTM1LjkzNiAwIDAgMCAxMzQuNCAxMzYuMTkySDc5My42YTEzNS42OCAxMzUuNjggMCAwIDAgMTM0LjQtMTM2LjE5MnYtODUuMjQ4aDI1LjZhMTUuMzYgMTUuMzYgMCAwIDAgMTUuMzYtMTUuNjE2di04MS42NjRhMTUuNjE2IDE1LjYxNiAwIDAgMC0xNS4zNi0xNS44NzIiIGZpbGw9IiNFNUU2RTYiPjwvcGF0aD48cGF0aCBkPSJNMzYxLjIxNiA3MjcuNTUyaC0xMDIuNEE4Ny4yOTYgODcuMjk2IDAgMCAxIDE3Mi44IDY0MHYtNzkuODcyYTYxLjE4NCA2MS4xODQgMCAwIDEgNjAuNDE2LTYxLjQ0aDE1My42YTYxLjE4NCA2MS4xODQgMCAwIDEgNjAuNDE2IDYxLjQ0VjY0MGE4Ny4yOTYgODcuMjk2IDAgMCAxLTg2LjUyOCA4Ny41NTIiIGZpbGw9IiNGRjVDN0EiPjwvcGF0aD48cGF0aCBkPSJNNjg1LjU2OCA3MjcuNTUyaDEwMi40QTg3LjI5NiA4Ny4yOTYgMCAwIDAgODczLjk4NCA2NDB2LTc5Ljg3MmE2MS4xODQgNjEuMTg0IDAgMCAwLTYwLjQxNi02MS40NGgtMTUzLjZhNjEuMTg0IDYxLjE4NCAwIDAgMC02MC40MTYgNjEuNDRWNjQwYTg3LjI5NiA4Ny4yOTYgMCAwIDAgODYuNTI4IDg3LjU1MiIgZmlsbD0iIzJDQkFFNSI+PC9wYXRoPjwvc3ZnPg==",
                text:"电影"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0yNzEuNjE2IDI0Ny44MDhhMjEyLjIyNCAyMTIuMjI0IDAgMCAwLTQ5LjY2NCAxNzIuOGwyNS42IDEyNi43MmM1Ni44MzIgMjEuNzYgNjAuMTYgODcuNTUyIDY3LjMyOCAxNDkuMjQ4YTExNjcuODcyIDExNjcuODcyIDAgMCAxIDE5MC4yMDgtMTQuMDggMTI0Ny40ODggMTI0Ny40ODggMCAwIDEgMTk2LjA5NiAxNC4wOGM3LjY4LTYxLjY5NiA0LjM1Mi0xMjYuNzIgNTkuOTA0LTE0OC43MzZsMjUuNi0xMjhhMjExLjcxMiAyMTEuNzEyIDAgMCAwLTQ5LjkyLTE3Mi4yODggMjE4LjYyNCAyMTguNjI0IDAgMCAwLTE2NS4xMi03NC43NTJoLTEzNC45MTJhMjE4LjYyNCAyMTguNjI0IDAgMCAwLTE2NS4xMiA3NC43NTIiIGZpbGw9IiNGRkIxNjEiPjwvcGF0aD48cGF0aCBkPSJNNTA1LjA4OCA0MTIuNjcybC0zNC44MTYtMzQuNTZhMTkuNDU2IDE5LjQ1NiAwIDAgMC0yNy4zOTIgMjcuMzkybDI1LjYgMjUuNi0yNS42IDI1LjZhMTkuNDU2IDE5LjQ1NiAwIDAgMCAyNy4zOTIgMjcuMzkybDM0LjgxNi0zNC41NiAzNS4wNzIgMzQuNTZhMTguNjg4IDE4LjY4OCAwIDAgMCAxMy41NjggNS42MzIgMTkuNDU2IDE5LjQ1NiAwIDAgMCAxMy44MjQtMzMuMDI0bC0yNS42LTI1LjYgMjUuNi0yNS42YTE5LjQ1NiAxOS40NTYgMCAwIDAtMTMuODI0LTMzLjAyNCAxOC42ODggMTguNjg4IDAgMCAwLTEzLjU2OCA1LjYzMnoiIGZpbGw9IiNGRkU0OTQiPjwvcGF0aD48cGF0aCBkPSJNODIyLjAxNiA0ODIuNTZhMTMwLjgxNiAxMzAuODE2IDAgMCAwLTEzMy44ODggMTI4djY4Ljg2NGwtMzY4LjEyOCAxLjUzNnYtNjkuMzc2YTEzMC4zMDQgMTMwLjMwNCAwIDAgMC0xMjAuMzItMTI4aC0xMy41NjhBODEuOTIgODEuOTIgMCAwIDAgMTAyLjQgNTYzLjJhNzYuOCA3Ni44IDAgMCAwIDAgMTMuMzEyIDc5LjEwNCA3OS4xMDQgMCAwIDAgMzguOTEyIDU0Ljc4NGw4Ljk2IDQuMzUyaDIuMzA0YTI1LjYgMjUuNiAwIDAgMSAxNS4zNiAyMi4wMTZ2NjMuNzQ0YTExMi4zODQgMTEyLjM4NCAwIDAgMCA4MC44OTYgMTA1LjQ3MiA1MS4yIDUxLjIgMCAwIDAgOTguODE2IDUuODg4aDMxMy4wODhhNTEuMiA1MS4yIDAgMCAwIDk4LjgxNi01Ljg4OCAxMTIuMzg0IDExMi4zODQgMCAwIDAgNzkuMTA0LTEwNS40NzJWNjUwLjc1MmEyNS42IDI1LjYgMCAwIDEgOC4xOTItMTEuNTJoMS41MzZsNC42MDgtMi44MTZhODAuMzg0IDgwLjM4NCAwIDAgMCA1MS4yLTYxLjQ0di0xMi4wMzJhODEuOTIgODEuOTIgMCAwIDAtODMuNzEyLTc5LjYxNiIgZmlsbD0iI0ZCOTUyQyI+PC9wYXRoPjwvc3ZnPg==",
                text:"电视剧"
            },
            {
                icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik01MTAuMjA4IDY4My4yNjRoLTExNC4xNzZsLTUwLjY4OCAyMDkuNDA4SDY3NC44MTZsLTUwLjY4OC0yMDkuNDA4aC0xMTMuOTJ6IiBmaWxsPSIjRkZENzc4Ij48L3BhdGg+PHBhdGggZD0iTTUzNS41NTIgMTUwLjUyOHYtMjguMTZhMjUuNiAyNS42IDAgMSAwLTUxLjIgMHYyOC4xNmEyNzEuODcyIDI3MS44NzIgMCAwIDAtMjQ0Ljk5MiAyNjkuNTY4djk3LjI4YTI1LjYgMjUuNiAwIDAgMCAyNi44OCAyNi44OGg0ODcuOTM2YTI1LjYgMjUuNiAwIDAgMCAyNS42LTI2Ljg4di05Ny4yOGEyNzEuNjE2IDI3MS42MTYgMCAwIDAtMjQ0LjIyNC0yNjkuNTY4eiIgZmlsbD0iIzQ4Q0ZFNSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjUuNjk2IDQ2NC42NG0xMDMuMTY4IDBsNTYyLjQzMiAwcTEwMy4xNjggMCAxMDMuMTY4IDEwMy4xNjhsMCAxNS4zNnEwIDEwMy4xNjgtMTAzLjE2OCAxMDMuMTY4bC01NjIuNDMyIDBxLTEwMy4xNjggMC0xMDMuMTY4LTEwMy4xNjhsMC0xNS4zNnEwLTEwMy4xNjggMTAzLjE2OC0xMDMuMTY4WiIgZmlsbD0iIzJDQkFFNSI+PC9wYXRoPjxwYXRoIGQ9Ik03NDIuNCA1MzcuNmEzNy42MzIgMzcuNjMyIDAgMSAwIDM3LjYzMiAzNy42MzJBMzcuMzc2IDM3LjM3NiAwIDAgMCA3NDIuNCA1MzcuNnpNMjc2LjczNiA1MzcuNmEzNy42MzIgMzcuNjMyIDAgMSAwIDM3LjYzMiAzNy42MzJBMzcuNjMyIDM3LjYzMiAwIDAgMCAyNzYuNzM2IDUzNy42eiIgZmlsbD0iI0ZGRDc3OCI+PC9wYXRoPjwvc3ZnPg==",
                text:"游戏赛事"
            },
        ]
    },
    onclick(e){
        console.log(e);
        wx.navigateTo({
          url: '/pages/partitionPage/partitionPage?index='+e.currentTarget.dataset.idx,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})