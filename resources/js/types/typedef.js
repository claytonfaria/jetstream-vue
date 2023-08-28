/** @typedef {string} DateTime */
/** @typedef {Object.<string, string>} Errors */
/** @typedef {Object.<string, Errors>} ErrorBag */

/**
 * Nullable type, can be either type `T` or `null`.
 * @template T
 * @typedef {(T|null)} Nullable
 */

/**
 * @typedef User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {Nullable<number>} current_team_id
 * @property {Nullable<string>} profile_photo_path
 * @property {string} profile_photo_url
 * @property {boolean} two_factor_enabled
 * @property {Nullable<DateTime>} email_verified_at
 * @property {DateTime} created_at
 * @property {DateTime} updated_at
 * @property {Team[]} all_teams
 * @property {Team} current_team
 */

/**
 * @typedef {object} Jetstream
 *
 * @property {boolean} canCreateTeams - Represents a possibility for a user to create teams.
 * @property {boolean} canManageTwoFactorAuthentication - Determines if a user can manage two-factor authentication.
 * @property {boolean} canUpdatePassword - Allows a user to update his password.
 * @property {boolean} canUpdateProfileInformation - Allows a user to update his profile information.
 * @property {any} flash - Indicator for a short-lived status or instructions displayed prominently.
 * @property {boolean} hasAccountDeletionFeatures - Denotes the availability of account deletion features.
 * @property {boolean} hasApiFeatures - Indicates the presence of API related functionalities.
 * @property {boolean} hasTeamFeatures - Describes whether team related features exist or not.
 * @property {boolean} hasTermsAndPrivacyPolicyFeature - Show the existence of terms and privacy policy features.
 * @property {boolean} managesProfilePhotos - Provides information about the possibility to manage profile photos.
 * @property {boolean} hasEmailVerification - Specifies the availability of the email verification feature.
 */

/**
 * An object that represents a team.
 * @typedef {Object} Team
 * @property {number} id - The unique ID of the team.
 * @property {number} user_id - The ID of the user the team belongs to.
 * @property {string} name - The name of the team.
 * @property {boolean} personal_team - Indicates if it's a personal team.
 * @property {string} created_at - The timestamp when the team was created.
 * @property {string} updated_at - The timestamp when the team was last updated.
 */
