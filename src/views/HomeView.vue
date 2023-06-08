<template>
  <div class="home-view-container" v-loading="loading">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
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
            <td colspan="3" class="date" v-if="data[0]">
              {{ data[0].title }}：<span>
                <el-input mb0 v-model="date.year"></el-input> </span
              >年<span> <el-input mb0 v-model="date.month"></el-input> </span
              >月<span> <el-input mb0 v-model="date.day"></el-input> </span>日
            </td>
          </tr>
          <tr>
            <td>姓名 <i>*</i></td>
            <td>
              <el-form-item prop="title">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
            </td>
            <td v-if="data[1]">{{ data[1].title }}</td>
            <td>
              <el-form-item prop="sex">
                <el-input v-model="form.sex"></el-input>
              </el-form-item>
            </td>
            <td>{{ data[2].title }}</td>
            <td>
              <el-form-item prop="nation">
                <el-input v-model="form.nation"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>{{ data[3].title }}</td>
            <td>
              <el-form-item prop="native_place">
                <el-input v-model="form.native_place"></el-input>
              </el-form-item>
            </td>
            <td>{{ data[4].title }}</td>
            <td>
              <el-form-item prop="birthday">
                <el-input v-model="form.birthday"></el-input>
              </el-form-item>
            </td>
            <td>{{ data[5].title }}</td>
            <td>
              <el-form-item prop="face">
                <el-select v-model="form.face" placeholder="请选择">
                  <el-option
                    v-for="item in data[5].options"
                    :key="item.id"
                    :label="item.title"
                    :value="item.val"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>{{ data[6].title }}</td>
            <td colspan="3">
              <el-form-item prop="id_num">
                <el-input v-model="form.id_num"></el-input>
              </el-form-item>
            </td>
            <td>{{ data[7].title }}</td>
            <td>
              <el-form-item prop="tel">
                <el-input v-model="form.tel"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>{{ data[8].title }}</td>
            <td colspan="5">
              <el-form-item prop="address">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>{{ data[9].title }}</td>
            <td colspan="3" radio>
              <el-radio
                v-for="item in data[9].options"
                v-model="form.type"
                :key="item.id"
                :label="item.val"
                >{{ item.title }}</el-radio
              >
            </td>
            <td>{{ data[10].title }}</td>
            <td>
              <el-input v-model="form.postal_code"></el-input>
            </td>
          </tr>
          <tr>
            <td>{{ data[11].title }}</td>
            <td colspan="5" radio>
              <el-radio
                v-for="item in data[11].options"
                v-model="form.application_level"
                :key="item.id"
                :label="item.val"
                >{{ item.title }}</el-radio
              >
            </td>
          </tr>
          <tr>
            <td>{{ data[12].title }}</td>
            <td colspan="5" radio>
              <el-radio
                v-for="item in data[12].options"
                v-model="form.educational_system"
                :key="item.id"
                :label="item.val"
                >{{ item.title }}</el-radio
              >
            </td>
          </tr>
          <tr flex>
            <td mb20 rowspan="3">{{ data[13].title }}</td>
            <td f1 mb10 colspan="2">毕业学校</td>
            <td f1 mb10>班主任</td>
            <td f1 mb10 colspan="2">班主任联系电话</td>
          </tr>
          <tr flex v-if="form.info[0]">
            <td f1 colspan="2" class="bl0">
              <el-form-item prop="info[0].title">
                <el-input mb0 bb0 v-model="form.info[0].title"></el-input>
              </el-form-item>
            </td>
            <td f1>
              <el-form-item prop="info[0].teacher">
                <el-input mb0 bb0 v-model="form.info[0].teacher"></el-input>
              </el-form-item>
            </td>
            <td f1 colspan="2">
              <el-form-item prop="info[0].tel">
                <el-input mb0 bb0 v-model="form.info[0].tel"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr flex v-if="form.info[1]">
            <td f1 colspan="2" class="bl0">
              <el-form-item prop="info[1].title">
                <el-input mb0 v-model="form.info[1].title"></el-input>
              </el-form-item>
            </td>
            <td f1>
              <el-form-item prop="info[1].teacher">
                <el-input mb0 v-model="form.info[1].teacher"></el-input>
              </el-form-item>
            </td>
            <td f1 colspan="2">
              <el-form-item prop="info[1].tel">
                <el-input mb0 v-model="form.info[1].tel"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr flex>
            <td rowspan="3" mt20 mb20>{{ data[14].title }}</td>
            <td mb10 f1>称呼</td>
            <td mb10 f1>姓名</td>
            <td mb10 f1 colspan="2">工作单位</td>
            <td mb10 f1>联系电话</td>
          </tr>
          <tr flex>
            <td f1 class="bl0">
              <el-form-item prop="family_members[0].title">
                <el-input mb0 bb0 v-model="form.family_members[0].title"></el-input>
              </el-form-item>
            </td>
            <td f1>
              <el-form-item prop="family_members[0].fullname">
                <el-input mb0 bb0 v-model="form.family_members[0].fullname"></el-input>
              </el-form-item>
            </td>
            <td f1 colspan="2">
              <el-form-item prop="family_members[0].company">
                <el-input mb0 bb0 v-model="form.family_members[0].company"></el-input>
              </el-form-item>
            </td>
            <td f1>
              <el-form-item prop="family_members[0].tel">
                <el-input mb0 bb0 v-model="form.family_members[0].tel"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr flex>
            <td f1 class="bl0">
              <el-form-item prop="family_members[1].title">
                <el-input mb0 v-model="form.family_members[1].title"></el-input>
              </el-form-item>
            </td>
            <td f1>
              <el-form-item prop="family_members[1].fullname">
                <el-input mb0 v-model="form.family_members[1].fullname"></el-input>
              </el-form-item>
            </td>
            <td f1 colspan="2">
              <el-form-item prop="family_members[1].company">
                <el-input mb0 v-model="form.family_members[1].company"></el-input>
              </el-form-item>
            </td>
            <td f1>
              <el-form-item prop="family_members[1].tel">
                <el-input mb0 v-model="form.family_members[1].tel"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td mt20>{{ data[15].title }}</td>
            <td colspan="5">
              <el-select v-model="form.speciality" placeholder="请选择报读专业">
                <el-option
                  v-for="item in data[15].options"
                  :key="item.id"
                  :label="item.title"
                  :value="item.val"
                >
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>{{ data[16].title }}：</td>
            <td colspan="2">
              <el-input v-model="form.signature_examinee"></el-input>
            </td>
            <td>{{ data[17].title }}：</td>
            <td colspan="2">
              <el-input v-model="form.signature_parent"></el-input>
            </td>
          </tr>
          <tr flex class="sign">
            <td f1 mb10>{{ data[18].title }}</td>
            <td f1 mb10>{{ data[19].title }}</td>
            <td f1 mb10>{{ data[20].title }}</td>
            <td f1 mb10 colspan="2">{{ data[21].title }}</td>
            <td f1 mb10>{{ data[22].title }}</td>
          </tr>
          <tr flex class="sign-cont">
            <td f1>
              <el-input v-model="form.zslshq" disabled></el-input>
            </td>
            <td f1>
              <el-input v-model="form.ext019" disabled></el-input>
            </td>
            <td f1>
              <el-input v-model="form.ext020" disabled></el-input>
            </td>
            <td f1 colspan="2">
              <el-input v-model="form.ext021" disabled></el-input>
            </td>
            <td f1>
              <el-input v-model="form.pay" disabled></el-input>
            </td>
          </tr>

          <tr>
            <td colspan="6" mb20>
              {{ data[23].title }}{{ data[23].note && `（${data[23].note}）` }}
            </td>
          </tr>
          <tr>
            <td>姓名</td>
            <td colspan="2">
              <el-input v-model="form.title" disabled></el-input>
            </td>
            <td>身份证号</td>
            <td colspan="2">
              <el-input v-model="form.id_num" disabled></el-input>
            </td>
          </tr>
          <tr>
            <td>手机号码</td>
            <td colspan="2">
              <el-input v-model="form.tel" disabled></el-input>
            </td>
            <td>报读专业</td>
            <td colspan="2">
              <el-input v-model="form.speciality" disabled></el-input>
            </td>
          </tr>
          <tr>
            <td>缴费金额</td>
            <td colspan="2">
              <el-input v-model="form.paymentAmount" disabled></el-input>
            </td>
            <td>收费人员</td>
            <td colspan="2">
              <el-input v-model="form.tollPersonnel" disabled></el-input>
            </td>
          </tr>
          <tr>
            <td>{{ data[24].title }}</td>
            <td colspan="5">
              <el-input
                v-model="form.note"
                type="textarea"
                :rows="3"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <el-button
                :loading="btnLoading"
                type="primary"
                @click="onSubmit('form')"
                >立即创建</el-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </div>
</template>
  
  <script>
import api from "@/api";

export default {
  data() {
    return {
      loading: false,
      btnLoading: false,
      data: [],
      date:{
        year:"",
        month:"",
        day:""
      },
      form: {
        title: "",
        sex: "",
        nation: "",
        native_place: "",
        birthday: "",
        face: "",
        id_num: "",
        tel: "",
        address: "",
        type: "",
        postal_code: "",
        application_level: "",
        educational_system: "",
        info: [
          {
            title: "",
            teacher: "",
            tel: "",
          },
          {
            title: "",
            teacher: "",
            tel: "",
          },
        ],
        family_members: [
          {
            title: "",
            fullname: "",
            company: "",
            tel: "",
          },
          {
            title: "",
            fullname: "",
            company: "",
            tel: "",
          },
        ],
        speciality: "",
        signature_examinee: "",
        signature_parent: "",
        zslshq: "",
        ext019: "",
        ext020: "",
        ext021: "",
        pay: "",
        financial_retention: {},
        note: "",
        paymentAmount: "",
        tollPersonnel: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        nation: [{ required: true, message: "请输入民族", trigger: "blur" }],
        native_place: [
          { required: true, message: "请输入籍贯", trigger: "blur" },
        ],
        birthday: [
          { required: true, message: "请输入出生日期", trigger: "blur" },
        ],
        face: [
          { required: true, message: "请选择政治面貌", trigger: "change" },
        ],
        id_num: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            min: 18,
            max: 18,
            message: "身份证长度为18位",
            trigger: "blur",
          },
        ],
        tel: [
          { required: true, message: "请输入电话", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入11位手机号",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "请输入通讯地址", trigger: "blur" },
        ],
        "info[0].title": [
          { required: true, message: "此项必填", trigger: "blur" },
        ],
        "info[0].teacher": [
          { required: true, message: "此项必填", trigger: "blur" },
        ],
        "info[0].tel": [
          { required: true, message: "此项必填", trigger: "blur" },
        ],
        "family_members[0].title": [
          { required: true, message: "此项必填", trigger: "blur" },
        ],
        "family_members[0].fullname": [
          { required: true, message: "此项必填", trigger: "blur" },
        ],
        "family_members[0].company": [
          { required: true, message: "此项必填", trigger: "blur" },
        ],
        "family_members[0].tel": [
          { required: true, message: "此项必填", trigger: "blur" },
        ],
      },
    };
  },
  async created() {
    this.loading = true;
    const time = new Date();
    this.date.year = time.getFullYear();
    this.date.month = (time.getMonth() + 1).toString().padStart(2, 0);
    this.date.day = (time.getDate()).toString().padStart(2, 0);
    const msgData = await api.getData("message");
    this.data = await this.resetData(msgData);
    this.loading = false;
  },
  computed: {
    formRegistration_time() {
      return this.date.year + "-" + this.date.month + "-" + this.date.day;
    },
  },
  watch: {
    "form.id_num"(val) {
      if (val.length < 7) {
        return;
      }
      const Y = val.slice(6, 10);
      const m = val.slice(10, 12);
      const d = val.slice(12, 14);
      let Ymd = "";
      if (Y.length === 4) {
        Ymd += Y + "年";
      }
      if (m.length === 2) {
        Ymd += m + "月";
      }
      if (d.length === 2) {
        Ymd += d + "日";
      }
      this.form.birthday = Ymd;
    },
  },
  methods: {
    async onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.btnLoading = true;
          await this.submitForm();
          this.btnLoading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async submitForm() {
      let infoId = "";
      let familyMembersId = "";
      let financialRetentionId = "";
      // 个人简历的新增
      if (this.form.info) {
        if (this.form.info[0].title) {
          const { title, teacher, tel } = this.form.info[0];
          infoId += await api.postMsg("info", { title, teacher, tel });
        }
        if (this.form.info[1].title) {
          const { title, teacher, tel } = this.form.info[1];
          infoId = "," + (await api.postMsg("info", { title, teacher, tel }));
        }
      }
      // 家庭主要成员的信息
      if (this.form.family_members) {
        if (this.form.family_members[0].title) {
          const { title, teacher, tel } = this.form.family_members[0];
          familyMembersId += await api.postMsg("family_members", {
            title,
            teacher,
            tel,
          });
        }
        if (this.form.family_members[1].title) {
          const { title, teacher, tel } = this.form.family_members[1];
          familyMembersId =
            "," +
            (await api.postMsg("family_members", {
              title,
              teacher,
              tel,
            }));
        }
      }
      const {
        title,
        id_num,
        tel: mobile,
        speciality,
        paymentAmount: amount,
        tollPersonnel: toll_personnel,
      } = this.form;
      financialRetentionId = await api.postMsg("financial_retention", {
        title,
        id_num,
        mobile,
        speciality,
        amount,
        toll_personnel,
      });
      if (infoId && familyMembersId && financialRetentionId) {
        const formData = {
          registration_time: this.formRegistration_time,
          title: this.form.title,
          sex: this.form.sex,
          nation: this.form.nation,
          native_place: this.form.native_place,
          birthday: this.form.birthday,
          face: this.form.face,
          id_num: this.form.id_num,
          tel: this.form.tel,
          address: this.form.address,
          type: this.form.type,
          postal_code: this.form.postal_code,
          application_level: this.form.application_level,
          educational_system: this.form.educational_system,
          info: infoId,
          family_members: familyMembersId,
          speciality: this.form.speciality,
          signature_examinee: this.form.signature_examinee,
          signature_parent: this.form.signature_parent,
          zslshq: this.form.zslshq,
          ext019: this.form.ext019,
          ext020: this.form.ext020,
          ext021: this.form.ext021,
          pay: this.form.pay,
          financial_retention: financialRetentionId,
          note: this.form.note,
        };
        const resultAll = await api.postMsg("message", formData);
        if (resultAll) {
          this.$message({
            message: "提交成功！",
            type: "success",
          });
        }
      }
    },
    resetData(data) {
      const newData = data.map(async (item) => {
        const data = {
          id: item.id,
          title: item.title,
          note: item.note,
          form_type: item.form_type,
          identifier: item.identifier,
        };
        if (item.option_list) {
          data.option_list = +item.option_list.split(":")[1];
          data.options = await this.getSelect("forms", data.option_list);
        }
        if (item.form_pid) {
          data.form_pid = +item.form_pid;
        }
        return data;
      });
      return Promise.all(newData);
    },
    async getSelect(key, id) {
      return await api.getData(key, id);
    },
  },
};
</script>
  
  <style lang="less" scoped>
@import "@/css/index.less";
</style>