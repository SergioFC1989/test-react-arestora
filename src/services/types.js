/**
 * @typedef {Object} Recipient
 * @property {string} name
 * @property {string} address
 * @property {Array<{name: string}>} channels
 */

/**
 * @typedef {Object} Status
 * @property {number} sid
 * @property {string} status
 * @property {string} date
 * @property {string} gmt
 * @property {string} ip
 * @property {string} OS
 * @property {string} browser
 * @property {string} agent
 * @property {boolean} new
 * @property {string} description
 * @property {boolean} final
 * @property {string} cfscode
 * @property {string} lang
 */

/**
 * @typedef {Object} Notification
 * @property {number} nid
 * @property {string} text
 * @property {string} date
 * @property {string} type
 * @property {string} scope
 */

/**
 * @typedef {Object} Task
 * @property {number} tid
 * @property {string} type
 * @property {string} status
 * @property {string} date
 * @property {string} gmt
 * @property {string} gmt-provided
 * @property {string} gmt-initial
 * @property {string} cfscode
 */

/**
 * @typedef {Object} Sender
 * @property {number} operator
 * @property {string} client
 * @property {string} user
 * @property {Object} version
 * @property {number} version.oid
 * @property {string} version.name
 * @property {string} version.version
 * @property {Object} version.domain
 * @property {number} version.domain.did
 * @property {string} version.domain.name
 * @property {string} version.domain.domain
 * @property {string} version.domain.gateway
 * @property {string} version.domain.url
 */

/**
 * @typedef {Object} QuestionOption
 * @property {number} oid
 * @property {string} label
 * @property {number} order
 * @property {boolean} default
 * @property {boolean} [value]
 * @property {Object} [input]
 * @property {boolean} [input.allowed]
 * @property {number} [input.min]
 * @property {number} [input.max]
 */

/**
 * @typedef {Object} Question
 * @property {number} qid
 * @property {string} label
 * @property {boolean} required
 * @property {string} type
 * @property {QuestionOption[]} options
 */

/**
 * @typedef {Object} Form
 * @property {string} fid
 * @property {string} title
 * @property {boolean} required
 * @property {boolean} answered
 * @property {Question[]} questions
 */

/**
 * @typedef {Object} Agreement
 * @property {boolean} must_accept_terms
 * @property {string} accept_button_text
 * @property {string} decline_button_text
 * @property {string} buttons_style
 * @property {string} agreement_deadline_fixed
 * @property {number} agreement_deadline_from_first_read
 * @property {string} agreement_deadline
 * @property {string} agreement_condition
 * @property {Form[]} forms
 * @property {boolean} signed_by_sender
 */

/**
 * @typedef {Object} ConfirmSignData
 * @property {string} cfscode
 * @property {string} cfsdata
 * @property {string} print
 * @property {number} thid
 * @property {string} date
 * @property {string} subject
 * @property {string} summary
 * @property {Recipient} recipient
 * @property {Status} status
 * @property {Array<Notification>} notifications
 * @property {Array<Task>} tasks
 * @property {string} language
 * @property {string} private
 * @property {string} thread_type
 * @property {Sender} sender
 * @property {string} content
 * @property {string} external_id
 * @property {string} public
 * @property {Agreement} agreement
 * @property {boolean} otp_protection
 * @property {Array} history
 * @property {Array} tickets
 * @property {boolean} response_text_allowed
 * @property {boolean} response_files_allowed
 * @property {Object} verify
 * @property {string} verify.qr
 * @property {string} verify.url
 * @property {Object} verify.keys
 * @property {string} verify.keys.recipient
 * @property {boolean} multisign
 * @property {string} core
 */
