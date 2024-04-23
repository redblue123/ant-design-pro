// 抽屉里的相关配置
import { ProLayoutProps } from '@ant-design/pro-components';

// import SmileUrl, { ReactComponent as SvgSmile } from '../public/logo.svg';
/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#6E1E1E',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Portal UI Max',
  pwa: true,
  logo: 'file:///Users/zhanglin/Documents/newui/test/public/logo.svg',
  // iconfontUrl 是页签中的icon
  iconfontUrl: ' ',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
