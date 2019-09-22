#!/usr/bin/env bash

# BASED ON: https://github.com/ralish/bash-script-template

set -o errexit          # Exit on most errors (see the manual)
set -o errtrace         # Make sure any error trap is inherited
set -o nounset          # Disallow expansion of unset variables
set -o pipefail         # Use last non-zero exit code in a pipeline

# DESC: Usage help
# ARGS: None
# OUTS: None
function script_usage() {
    cat << EOF
Usage:
    dockerphp.sh [OPTIONS] COMMAND

Command:
    Any command to execute within php docker container.

Options:
    -h|--help           Displays this help
    -v|--verbose        Displays verbose output
   -nc|--no-colour      Disables colour output
EOF
}

# DESC: Parameter parser
# ARGS: $@ (optional): Arguments provided to the script
# OUTS: Variables indicating command-line parameters and options
function parse_params() {

    # Print help if no arguments were passed.
    [[ $# -eq 0 ]] && set -- "--help"

    local args=$#;

    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                if [[ $args == 1 ]]; then
                    script_usage
                    exit 0
                fi
                ;;
            -v|--verbose)
                verbose=true
                ;;
            -nc|--no-colour)
                no_colour=true
                ;;
        esac
        shift
    done

}

# ----------------------------------------------
#              CUSTOM FUNCTIONS
# ----------------------------------------------

# DESC: Main control flow
# ARGS: $@ (optional): Arguments provided to the script
# OUTS: None
function main() {

    docker_compose_yml="docker-compose.yml"

    command="cd /opt/project && $@"
    docker-compose exec --user $(id -u):$(id -g) "php" bash -cl "$command"
}

main "$@"
