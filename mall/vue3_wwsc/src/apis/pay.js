import http from '@/utils/http'

// 获取支付订单详情接口
export const getOrderAPI =  => {
    return http.get(`/member/order/${id}`);
}