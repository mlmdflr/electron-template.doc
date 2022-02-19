export const menu: MenuCfg = {
    defaultKey: 'introduce',
    menuOption: [
        {
            key: 'base',
            label: '基础',
            children: [
                {
                    key: 'introduce',
                    label: '介绍',
                }, {
                    key: 'instConfig',
                    label: '安装运行打包',
                }, {
                    key: 'mirrorAss',
                    label: '镜像配置',
                }, {
                    key: 'feature',
                    label: '一些说明',
                },
            ]
        }
    ]

}
export const defaultKey = menu.defaultKey

export default menu.menuOption