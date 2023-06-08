<template>
  <div class="content-view-container">
    <table cellspacing="0">
      <thead>
        <tr>
          <th colspan="6">
            <h1 class="title">江西水利工程技师学院新生报名登记表</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="3"></td>
          <td colspan="3" class="date">报名时间：{{dateYear}}年{{dateMonth}}月{{dateDate}}日</td>
        </tr>
        <tr>
          <td>姓名</td>
          <td>{{ rs.title }}</td>
          <td>性别</td>
          <td>{{ rs.sex }}</td>
          <td>民族</td>
          <td>{{ rs.nation }}</td>
        </tr>
        <tr>
          <td>籍贯</td>
          <td>
            {{ rs.native_place }}
          </td>
          <td>出生日期</td>
          <td>
            {{ rs.birthday }}
          </td>
          <td>政治面貌</td>
          <td>
            <template v-if="rs && rs.face && rs.face.title">{{
              rs.face.title
            }}</template>
          </td>
        </tr>
        <tr>
          <td>身份证号</td>
          <td colspan="3">{{ rs.id_num }}</td>
          <td>学生本人联系电话</td>
          <td>{{ rs.tel }}</td>
        </tr>
        <tr>
          <td>家庭通讯地址</td>
          <td colspan="5">{{ rs.address }}</td>
        </tr>
        <tr>
          <td>考生类别</td>
          <td colspan="3">
            <template v-if="rs && rs.type && rs.type.title">{{
              rs.type.title
            }}</template>
          </td>
          <td>邮政编码</td>
          <td>{{ rs.postal_code }}</td>
        </tr>
        <tr>
          <td>报考层次</td>
          <td colspan="5">
            <template
              v-if="rs && rs.application_level && rs.application_level.title"
              >{{ rs.application_level.title }}</template
            >
          </td>
        </tr>
        <tr>
          <td>学制</td>
          <td colspan="5">
            <template
              v-if="rs && rs.educational_system && rs.educational_system.title"
              >{{ rs.educational_system.title }}</template
            >
          </td>
        </tr>
        <tr>
          <td rowspan="3">个人简历</td>
          <td colspan="2">毕业学校</td>
          <td>班主任</td>
          <td colspan="2">班主任联系电话</td>
        </tr>
        <tr v-for="item in info" :key="item.id">
          <td colspan="2" class="bl0">{{ item.title }}</td>
          <td>{{ item.teacher }}</td>
          <td colspan="2">{{ item.tel }}</td>
        </tr>
        <template v-if="!info.length">
          <tr>
            <td colspan="2" class="bl0"></td>
            <td></td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td colspan="2" class="bl0"></td>
            <td></td>
            <td colspan="2"></td>
          </tr>
        </template>
        <template v-else-if="info.length === 1">
          <tr>
            <td colspan="2" class="bl0"></td>
            <td></td>
            <td colspan="2"></td>
          </tr>
        </template>
        <tr>
          <td rowspan="3">家庭主要成员</td>
          <td>称呼</td>
          <td>姓名</td>
          <td colspan="2">工作单位</td>
          <td>联系电话</td>
        </tr>
        <tr v-for="item in family_members" :key="item.id">
          <td class="bl0">{{ item.title }}</td>
          <td>{{ item.fullname }}</td>
          <td colspan="2">{{ item.company }}</td>
          <td>{{ item.tel }}</td>
        </tr>
        <template v-if="!family_members.length">
          <tr>
          <td class="bl0"></td>
          <td></td>
          <td colspan="2"></td>
          <td></td>
        </tr>
          <tr>
          <td class="bl0"></td>
          <td></td>
          <td colspan="2"></td>
          <td></td>
        </tr>
        </template>
        <template v-else-if="family_members.length === 1">
          <tr>
          <td class="bl0"></td>
          <td></td>
          <td colspan="2"></td>
          <td></td>
        </tr>
        </template>
        
        <tr>
          <td>报读专业</td>
          <td colspan="5">
            <template v-if="rs && rs.speciality && rs.speciality.title">{{
              rs.speciality.title
            }}</template>
          </td>
        </tr>
        <tr>
          <td>考生签名：</td>
          <td colspan="2">{{ rs.signature_examinee }}</td>
          <td>家长签名：</td>
          <td colspan="2">{{ rs.signature_parent }}</td>
        </tr>
        <tr>
          <td>招生老师核签</td>
          <td>招办资格审核</td>
          <td>分管校领导审核</td>
          <td colspan="2">校长审核</td>
          <td>财务科缴费</td>
        </tr>
        <tr>
          <td>{{ rs.zslshq }}</td>
          <td>{{ rs.ext019 }}</td>
          <td>{{ rs.ext020 }}</td>
          <td colspan="2">{{ rs.ext021 }}</td>
          <td>{{ rs.pay }}</td>
        </tr>

        <tr>
          <td colspan="6">财务留存单</td>
        </tr>
        <tr>
          <td>姓名</td>
          <td colspan="2">
            {{ rs.title }}
          </td>
          <td>身份证号</td>
          <td colspan="2">
            {{ rs.id_num }}
          </td>
        </tr>
        <tr>
          <td>手机号码</td>
          <td colspan="2">
            {{ rs.tel }}
          </td>
          <td>报读专业</td>
          <td colspan="2">
            <template v-if="rs && rs.speciality && rs.speciality.title">{{
              rs.speciality.title
            }}</template>
          </td>
        </tr>
        <tr>
          <td>缴费金额</td>
          <td colspan="2">
            {{ rs.paymentAmount }}
          </td>
          <td>收费人员</td>
          <td colspan="2">
            {{ rs.tollPersonnel }}
          </td>
        </tr>
        <tr>
          <td>备注</td>
          <td colspan="5">{{ rs.note }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      rs: {},
    };
  },
  computed: {
    info() {
      const newData = [];
      if (!this.rs.info || this.rs.info === "文章内容不存在") {
        return [];
      }
      for (const key in this.rs.info) {
        if (Object.hasOwnProperty.call(this.rs.info, key)) {
          const el = this.rs.info[key];
          newData.push(el);
        }
      }
      return newData;
    },
    family_members() {
      const newData = [];
      if (
        !this.rs.family_members ||
        this.rs.family_members === "文章内容不存在"
      ) {
        return [];
      }
      for (const key in this.rs.family_members) {
        if (Object.hasOwnProperty.call(this.rs.family_members, key)) {
          const el = this.rs.family_members[key];
          newData.push(el);
        }
      }
      return newData;
    },
    dateYear(){
      if(!this.rs.registration_time){
        return null;
      }
      return this.rs.registration_time.split("-")[0];
    },
    dateMonth(){
      if(!this.rs.registration_time){
        return null;
      }
      return this.rs.registration_time.split("-")[1];
    },
    dateDate(){
      if(!this.rs.registration_time){
        return null;
      }
      return this.rs.registration_time.split("-")[2];
    }
  },
  async created() {
    this.rs = await api.getContent(this.$route.params.id);
  },
};
</script>

<style lang="less" scoped>
@import "@/css/index.less";
.content-view-container {
  padding: 50px 0;
}
</style>