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
 * @property {string} gmt_provided
 * @property {string} gmt_initial
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
 * @typedef {Object} Verify
 * @property {string} qr
 * @property {string} url
 * @property {Object} keys
 * @property {string} keys.recipient
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
 * @property {string} private_note  // Renombrado de 'private'
 * @property {string} thread_type
 * @property {Sender} sender
 * @property {string} content
 * @property {string} external_id
 * @property {string} public_note  // Renombrado de 'public'
 * @property {Agreement} agreement
 * @property {boolean} otp_protection
 * @property {Array<Object>} history // Detallar más si es necesario
 * @property {Array<Object>} tickets  // Detallar más si es necesario
 * @property {boolean} response_text_allowed
 * @property {boolean} response_files_allowed
 * @property {Verify} verify
 * @property {boolean} multisign
 * @property {string} core
 */

/**
 * Represents the state of a thread.
 *
 * @typedef {Object} ThreadState
 * @property {ConfirmSignData|null} thread - The current thread object or null if no thread is selected.
 * @property {boolean} loading - Indicates whether the thread is currently loading.
 * @property {Object|null} error - The error object if an error occurred, otherwise null.
 */
export const threadState = {
  thread: null,
  loading: false,
  error: null,
};
