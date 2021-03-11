<?php

namespace AAXIS\Bundle\AppBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

/**
 * Class AAXISAppExtension
 * @package AAXIS\Bundle\FacilityBundle\DependencyInjection
 */
class AAXISAppExtension extends Extension
{

    /**
     * Loads a specific configuration.
     *
     * @param  array            $configs
     * @param  ContainerBuilder $container
     * @throws \Exception
     */
    public function load(array $configs, ContainerBuilder $container)
    {

        $env = $container->getParameter("kernel.environment");
        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yml');
    }
}
