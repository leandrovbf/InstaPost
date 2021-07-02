const Notifyer = {
    async init(){
        const permissions = await Notification.requestPermission()
        if(permissions !== "granted"){
            throw new Error('Permissão negada')
        }
        
    },

    notify(title, body, icon) {
        new Notification(title,{
            body,
            icon

        })
    }
}

export {Notifyer}