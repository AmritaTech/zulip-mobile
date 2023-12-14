/* @flow strict-local */
export const REHYDRATE: 'persist/REHYDRATE' = 'persist/REHYDRATE';

export const APP_ONLINE: 'APP_ONLINE' = 'APP_ONLINE';
export const APP_ORIENTATION: 'APP_ORIENTATION' = 'APP_ORIENTATION';
export const DEAD_QUEUE: 'DEAD_QUEUE' = 'DEAD_QUEUE';

export const ACCOUNT_REMOVE: 'ACCOUNT_REMOVE' = 'ACCOUNT_REMOVE';
export const ACCOUNT_SWITCH: 'ACCOUNT_SWITCH' = 'ACCOUNT_SWITCH';

export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGOUT: 'LOGOUT' = 'LOGOUT';

export const REGISTER_START: 'REGISTER_START' = 'REGISTER_START';
export const REGISTER_ABORT: 'REGISTER_ABORT' = 'REGISTER_ABORT';
export const REGISTER_COMPLETE: 'REGISTER_COMPLETE' = 'REGISTER_COMPLETE';

export const RESET_ACCOUNT_DATA: 'RESET_ACCOUNT_DATA' = 'RESET_ACCOUNT_DATA';

export const REFRESH_SERVER_EMOJI_DATA: 'REFRESH_SERVER_EMOJI_DATA' = 'REFRESH_SERVER_EMOJI_DATA';

export const DISMISS_SERVER_PUSH_SETUP_NOTICE: 'DISMISS_SERVER_PUSH_SETUP_NOTICE' =
  'DISMISS_SERVER_PUSH_SETUP_NOTICE';
export const SET_SILENCE_SERVER_PUSH_SETUP_WARNINGS: 'SET_SILENCE_SERVER_PUSH_SETUP_WARNINGS' =
  'SET_SILENCE_SERVER_PUSH_SETUP_WARNINGS';

export const INIT_TOPICS: 'INIT_TOPICS' = 'INIT_TOPICS';

export const EVENT: 'EVENT' = 'EVENT';
export const EVENT_NEW_MESSAGE: 'EVENT_NEW_MESSAGE' = 'EVENT_NEW_MESSAGE';
export const EVENT_SUBMESSAGE: 'EVENT_SUBMESSAGE' = 'EVENT_SUBMESSAGE';
export const EVENT_MESSAGE_DELETE: 'EVENT_MESSAGE_DELETE' = 'EVENT_MESSAGE_DELETE';
export const EVENT_SUBSCRIPTION: 'EVENT_SUBSCRIPTION' = 'EVENT_SUBSCRIPTION';
export const EVENT_UPDATE_MESSAGE: 'EVENT_UPDATE_MESSAGE' = 'EVENT_UPDATE_MESSAGE';
export const EVENT_REACTION_ADD: 'EVENT_REACTION_ADD' = 'EVENT_REACTION_ADD';
export const EVENT_REACTION_REMOVE: 'EVENT_REACTION_REMOVE' = 'EVENT_REACTION_REMOVE';
export const EVENT_PRESENCE: 'EVENT_PRESENCE' = 'EVENT_PRESENCE';
export const EVENT_USER_STATUS_UPDATE: 'EVENT_USER_STATUS_UPDATE' = 'EVENT_USER_STATUS_UPDATE';
export const EVENT_TYPING_START: 'EVENT_TYPING_START' = 'EVENT_TYPING_START';
export const EVENT_TYPING_STOP: 'EVENT_TYPING_STOP' = 'EVENT_TYPING_STOP';
export const EVENT_UPDATE_MESSAGE_FLAGS: 'EVENT_UPDATE_MESSAGE_FLAGS' =
  'EVENT_UPDATE_MESSAGE_FLAGS';
export const EVENT_USER_ADD: 'EVENT_USER_ADD' = 'EVENT_USER_ADD';
export const EVENT_USER_REMOVE: 'EVENT_USER_REMOVE' = 'EVENT_USER_REMOVE';
export const EVENT_MUTED_TOPICS: 'EVENT_MUTED_TOPICS' = 'EVENT_MUTED_TOPICS';
export const EVENT_MUTED_USERS: 'EVENT_MUTED_USERS' = 'EVENT_MUTED_USERS';

export const EVENT_USER_GROUP_ADD: 'EVENT_USER_GROUP_ADD' = 'EVENT_USER_GROUP_ADD';
export const EVENT_USER_GROUP_REMOVE: 'EVENT_USER_GROUP_REMOVE' = 'EVENT_USER_GROUP_REMOVE';
export const EVENT_USER_GROUP_UPDATE: 'EVENT_USER_GROUP_UPDATE' = 'EVENT_USER_GROUP_UPDATE';
export const EVENT_USER_GROUP_ADD_MEMBERS: 'EVENT_USER_GROUP_ADD_MEMBERS' =
  'EVENT_USER_GROUP_ADD_MEMBERS';
export const EVENT_USER_GROUP_REMOVE_MEMBERS: 'EVENT_USER_GROUP_REMOVE_MEMBERS' =
  'EVENT_USER_GROUP_REMOVE_MEMBERS';

export const MESSAGE_FETCH_START: 'MESSAGE_FETCH_START' = 'MESSAGE_FETCH_START';
export const MESSAGE_FETCH_ERROR: 'MESSAGE_FETCH_ERROR' = 'MESSAGE_FETCH_ERROR';
export const MESSAGE_FETCH_COMPLETE: 'MESSAGE_FETCH_COMPLETE' = 'MESSAGE_FETCH_COMPLETE';

export const PRESENCE_RESPONSE: 'PRESENCE_RESPONSE' = 'PRESENCE_RESPONSE';
export const SET_GLOBAL_SETTINGS: 'SET_GLOBAL_SETTINGS' = 'SET_GLOBAL_SETTINGS';
export const DISMISS_SERVER_COMPAT_NOTICE: 'DISMISS_SERVER_COMPAT_NOTICE' =
  'DISMISS_SERVER_COMPAT_NOTICE';

export const GOT_PUSH_TOKEN: 'GOT_PUSH_TOKEN' = 'GOT_PUSH_TOKEN';
export const REGISTER_PUSH_TOKEN_START: 'REGISTER_PUSH_TOKEN_START' = 'REGISTER_PUSH_TOKEN_START';
export const REGISTER_PUSH_TOKEN_END: 'REGISTER_PUSH_TOKEN_END' = 'REGISTER_PUSH_TOKEN_END';
export const ACK_PUSH_TOKEN: 'ACK_PUSH_TOKEN' = 'ACK_PUSH_TOKEN';
export const UNACK_PUSH_TOKEN: 'UNACK_PUSH_TOKEN' = 'UNACK_PUSH_TOKEN';

export const EVENT_REALM_EMOJI_UPDATE: 'EVENT_REALM_EMOJI_UPDATE' = 'EVENT_REALM_EMOJI_UPDATE';
export const EVENT_REALM_FILTERS: 'EVENT_REALM_FILTERS' = 'EVENT_REALM_FILTERS';

// TODO(server-5.0): Remove these two, when all supported servers can handle
//   the `user_settings_object` client capability (FL 89).
export const EVENT_UPDATE_DISPLAY_SETTINGS: 'EVENT_UPDATE_DISPLAY_SETTINGS' =
  'EVENT_UPDATE_DISPLAY_SETTINGS';
export const EVENT_UPDATE_GLOBAL_NOTIFICATIONS_SETTINGS: 'EVENT_UPDATE_GLOBAL_NOTIFICATIONS_SETTINGS' =
  'EVENT_UPDATE_GLOBAL_NOTIFICATIONS_SETTINGS';

export const EVENT_ALERT_WORDS: 'EVENT_ALERT_WORDS' = 'EVENT_ALERT_WORDS';

export const MESSAGE_SEND_START: 'MESSAGE_SEND_START' = 'MESSAGE_SEND_START';
export const MESSAGE_SEND_COMPLETE: 'MESSAGE_SEND_COMPLETE' = 'MESSAGE_SEND_COMPLETE';

export const TOGGLE_OUTBOX_SENDING: 'TOGGLE_OUTBOX_SENDING' = 'TOGGLE_OUTBOX_SENDING';
export const DELETE_OUTBOX_MESSAGE: 'DELETE_OUTBOX_MESSAGE' = 'DELETE_OUTBOX_MESSAGE';

export const DRAFT_UPDATE: 'DRAFT_UPDATE' = 'DRAFT_UPDATE';

export const CLEAR_TYPING: 'CLEAR_TYPING' = 'CLEAR_TYPING';
