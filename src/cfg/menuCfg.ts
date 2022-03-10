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
                    label: '镜像',
                }, {
                    key: 'inCfg',
                    label: '配置',
                },
                {
                    key: 'script',
                    label: '脚本'
                }
            ]
        }, {
            key: 'last',
            label: '最后',
            children: [
                {
                    key: 'feature',
                    label: '一些说明',
                }
            ]
        }
    ]

}
export const defaultKey = menu.defaultKey

export default menu.menuOption