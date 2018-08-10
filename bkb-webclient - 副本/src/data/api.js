import Abp from '../Abp/Abp'

class API {
    /*-----------------------------鼠标码-------------------------*/
    // 查询鼠标码
    GetMouse (code){
        var url = encodeURI(`api/v1/crm/mouse/${code}`)
        return Abp.Requests.get(url)
    }
    // 增加鼠标码
    CreateMouse (data) {
        return Abp.Requests.post('api/v1/crm/mouse/add',data)
    }
    // 获得鼠标的详细信息
    GetMouseDetail (code) {
        var url = encodeURI(`api/v1/crm/mouse/${code}/detail`)
        return Abp.Requests.get(url)
    }
    // 删除鼠标
    DeleteMouse (data) {
        return Abp.Requests.patch('api/v1/crm/mouse/delete',data)
    }
    // 回收鼠标
    RecycleMouse (code) {
        var url = encodeURI(`api/v1/crm/mouse/${code}/recycle`)
        return Abp.Requests.put(url)
    }
    // 更换鼠标
    ReplaceMouse (code) {
        var url = encodeURI(`api/v1/crm/mouse/${code.oldcode}/replace/${code.newcode}`)
        return Abp.Requests.put(url)
    }
    // 修改鼠标信息
    UpdateMouse (data) {
        return Abp.Requests.put('api/v1/crm/mouse/update',data)
    }
    // 获得所有代理商信息
    GetAgents () {
        return Abp.Requests.get('api/v1/crm/agent/list')
    }
    //获取代理商信息
    GetAgent (id) {
        var url = encodeURI(`api/v1/crm/agent/${id}`)
        return Abp.Requests.get(url)
    }
    //获得所有直销员信息
    GetSalers () {
        return Abp.Requests.get('api/v1/crm/saler/list')
    }
    //获得直销员信息
    GetSaler (id) {
        var url = encodeURI(`api/v1/crm/saler/${id}`)
        return Abp.Requests.get(url)
    }
    /*-----------------------------学校-------------------------*/
    //获取学校地区
    GetAreas(){
        var url =encodeURI(`api/v1/dict/code_area/list`)
        return Abp.Requests.get(url)
    }
    //获取某地区的所有学校，不包含已删除的学校
    GetSchoolsOfArea(id){
        var url = encodeURI(`api/v1/org/area/${id}/school/list`)
        return Abp.Requests.get(url)
    }
    // 获取学校详情
    GetSchoolDetail(schoolID){
        var url = encodeURI(`api/v1/org/school/${schoolID}/detail`)
        return Abp.Requests.get(url)
    }
    //添加学校
    AddSchool(data){
        return Abp.Requests.post('api/v1/org/school/add',data)
    }
    // 更新学校信息
    UpdateSchool(data){
        return Abp.Requests.put('api/v1/org/school/update',data)
    }
    // 获取学校名称中包含关键字的学校列表
    GetSchoolsLikeName (name) {
        var url = encodeURI(`api/v1/org/school/like/${name}/list`)
        return Abp.Requests.get(url)
    }
    // 删除学校
    DeleteSchool (data) {
        return Abp.Requests.patch('api/v1/org/school/delete',data)
    }
    // 获取学校的拓展信息
    GetSchool (schoolID) {
        var url = encodeURI(`api/v1/org/school/${schoolID}`)
        return Abp.Requests.get(url)
    }
    /*-----------------------------角色-------------------------*/
    // 得到所有角色（包含禁用的）
    GetAllRoles () {
        return Abp.Requests.get('api/v1/admin/role/list')
    }
    // 得到角色授予的权限集合
    GetPrivilegesOfRole (roleID) {
        var url = encodeURI(`api/v1/admin/role/${roleID}/privilege/list`)
        return Abp.Requests.get(url)
    }
    // 给角色授予权限，如果权限为空则表示清空角色的权限
    GrantPrivileges (data) {
        return Abp.Requests.post('api/v1/admin/role/grant/privilege',data)
    }
    /*-----------------------------权限-------------------------*/
    // 获得所有权限定义
    GetPrivileges () {
        return Abp.Requests.get('api/v1/admin/privilege/list')
    }
    // 创建新的权限，根权限的PID设置为0
    CreatePrivilege (data) {
        return Abp.Requests.post('api/v1/admin/privilege/add',data)
    }
    // 更改权限属性，包括父子关系
    UpdatePrivilege (data) {
        return Abp.Requests.put('api/v1/admin/privilege/update',data)
    }
    // 删除权限，只能删除不包含子的权限
    DeletePrivilege (privilegeID) {
        var url = encodeURI(`api/v1/admin/privilege/${privilegeID}/delete`)
        return Abp.Requests.delete(url)
    }
    /*-----------------------------更改密码-------------------------*/
    UpdateTeacherPassword (data) {
        return Abp.Requests.put('api/v1/admin/update/password',data)
    }
    /*-----------------------------消息提示-------------------------*/
    reqSuccess(obj,msg){
        obj.$message({
            message: msg,
            type: 'success'
        });
	}
	reqFail(obj,msg){
        obj.$message({
            message: msg,
            type: 'error'
        });
	}
    reqWarn(obj,msg){
        obj.$message({
            message: msg,
            type: 'warning'
        });
	}
 }
 export default API;