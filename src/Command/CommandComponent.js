


const createErrorAttachment = (error) => {
    return {
        color: 'danger',
        text: `*Error*:\n${error.message}`,
        mrkdwn_in: ['text']
    };
};

const createSuccessAttachment = (feed) => {
    return {
        color: 'good',
        title: `*${feed.title}*`,
        title_link: `${feed.link}`,
        author_name: feed.author,
        author_icon: feed.image,
        ts:parseInt(feed.date.getTime()/1000),
        mrkdwn_in: ['text']
    };
};

const createAttachment = (result) => {
    if (result.constructor === Error) {
        return createErrorAttachment(result)
    }

    return createSuccessAttachment(result)
};

const postProcess = (data) => {
    return data.constructor === Array ? data : [data];
};


class CommandComponent
{
    /**
     *
     * @param body
     * @return {Promise}
     */
    render(body){}

    generateResponse(body) {
        return this.render(body).then(a =>  {

            const data = postProcess(a);

            return {
                text: `*You asked for ${body.command} : ${body.text}*`,
                attachments: data.map(createAttachment)
            };
        });

    }

}



module.exports = CommandComponent;